package handler

import (
	"errors"
	"net/http"

	"github.com/alijabbbar034/foodApp/api/storer"
	"github.com/alijabbbar034/foodApp/models"
	"github.com/alijabbbar034/foodApp/utils"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type User_Handler struct {
	storer storer.User_Storer
}
type LoginReq struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

func NewUserHandler(db storer.User_Storer) *User_Handler {

	return &User_Handler{
		storer: db,
	}
}

func (u *User_Handler) Register_User_Handler(c *gin.Context) {

	var user models.User
	if err := c.ShouldBindJSON(&user); err != nil {
		utils.ErrorHandler(c, http.StatusBadRequest, errors.New("Bad request"))
		return
	}

	if err := models.ValidateUserData(user); err != nil {

		utils.ErrorHandler(c, http.StatusBadRequest, errors.New("Invalid user data"))
		return
	}
	password, err := utils.HashPassword(user.Password)
	if err != nil {
		utils.ErrorHandler(c, http.StatusInternalServerError, err)
		return
	}

	user.Password = password
	saved, err := u.storer.RegisterUser(user)
	if err != nil {
		utils.ErrorHandler(c, http.StatusInternalServerError, errors.New("error registering user"))
		return
	}

	utils.SendToken(c, *saved)
	return
}

func (u *User_Handler) Login_User_Handler(c *gin.Context) {

	var req LoginReq
	if err := c.ShouldBindJSON(&req); err != nil {
		utils.ErrorHandler(c, http.StatusBadRequest, errors.New("Bad request"))
		return
	}
	if req.Email == "" || req.Password == "" {
		utils.ErrorHandler(c, http.StatusBadRequest, errors.New("Bad request"))
		return
	}
	user, err := u.storer.GetByEmail(req.Email)
	if err != nil {
		utils.ErrorHandler(c, http.StatusBadRequest, errors.New("Inavlid Email or Password"))
		return
	}

	err = utils.ComaprePassword(user.Password, req.Password)
	if err != nil {
		utils.ErrorHandler(c, http.StatusBadRequest, errors.New("Inavlid Email or Password"))
		return
	}
	utils.SendToken(c, *user)

	c.JSON(http.StatusOK, gin.H{
		"message": "Login User",
	})
}

func (u *User_Handler) Get_User_Handler(c *gin.Context) {

	_id := c.Param("id")
	id, err := primitive.ObjectIDFromHex(_id)
	if err != nil {
		utils.ErrorHandler(c, http.StatusBadRequest, errors.New("Inavlid Id"))
		return
	}
	user, err := u.storer.GetByID(id)
	if err != nil {
		utils.ErrorHandler(c, http.StatusInternalServerError, errors.New("Inavlid Id"))
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Get User",
		"user":    user,
	})
}

func (u *User_Handler) Update_User_Handler(c *gin.Context) {

	_id := c.Param("id")
	id, err := primitive.ObjectIDFromHex(_id)
	if err != nil {
		utils.ErrorHandler(c, http.StatusBadRequest, errors.New("Inavlid Id"))
		return
	}
	var user models.User
	if err := c.ShouldBindJSON(&user); err != nil {
		utils.ErrorHandler(c, http.StatusBadRequest, errors.New("Bad request"))
		return
	}

	updated, err := u.storer.UpdateUser(user, id)
	if err != nil {
		utils.ErrorHandler(c, http.StatusInternalServerError, errors.New("error updating user"))
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Update User",
		"updated": updated,
	})
}

func (u *User_Handler) Delete_User_Handler(c *gin.Context) {
	_id := c.Param("id")
	id, err := primitive.ObjectIDFromHex(_id)
	if err != nil {
		utils.ErrorHandler(c, http.StatusBadRequest, errors.New("Inavlid Id"))
		return
	}
	deleted, err := u.storer.DeleteUser(id)

	if err != nil {
		utils.ErrorHandler(c, http.StatusInternalServerError, errors.New("Inavlid Id"))
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"message": "Delete User",
		"deleted": deleted,
	})
}

func (u *User_Handler) Get_User_Profile(c *gin.Context) {

	user, _ := c.Get("user")
	newUser := user.(*models.User)

	c.JSON(http.StatusOK, gin.H{
		"message": "Get User Profile",
		"user":    newUser,
	})
}
func (u *User_Handler) Logout_User_Handler(c *gin.Context) {
	c.SetCookie("token", "", 1, "/", "localhost", false, true)
	c.JSON(http.StatusOK, gin.H{
		"message": "Logout User",
	})
}
