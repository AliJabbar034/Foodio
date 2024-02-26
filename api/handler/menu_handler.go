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

type menu_Handler struct {
	storer storer.Menu_storer
}

func New_Menu_Handler(db storer.Menu_storer) *menu_Handler {

	return &menu_Handler{
		storer: db,
	}
}

func (m *menu_Handler) CreateMenuHandler(c *gin.Context) {

	var menu models.Menu

	if err := c.ShouldBindJSON(&menu); err != nil {
		utils.ErrorHandler(c, http.StatusBadRequest, errors.New("Bad request"))
		return
	}
	if err := models.ValidateMenu(menu); err != nil {
		utils.ErrorHandler(c, http.StatusBadRequest, errors.New("Invalid menu data"))
		return
	}

}

func (m *menu_Handler) GetAllMenuItem_Handler(c *gin.Context) {

	c.JSON(http.StatusOK, gin.H{
		"message": "Get all menu items",
	})
}

func (m *menu_Handler) GetMenuById_Handler(c *gin.Context) {

	_id := c.Param("id")
	id, err := primitive.ObjectIDFromHex(_id)

	if err != nil {
		utils.ErrorHandler(c, http.StatusBadRequest, errors.New("Inavlid Id"))
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Get menu by id",
		"id":      id,
	})
}

func (m *menu_Handler) DeleteMenu_Handler(c *gin.Context) {

	_id := c.Param("id")
	id, err := primitive.ObjectIDFromHex(_id)

	if err != nil {
		utils.ErrorHandler(c, http.StatusBadRequest, errors.New("Inavlid Id"))
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"message": "Delete menu",
		"id":      id,
	})
}

func (m *menu_Handler) UpdateMenu_Handler(c *gin.Context) {

	_id := c.Param("id")
	id, err := primitive.ObjectIDFromHex(_id)
	if err != nil {
		utils.ErrorHandler(c, http.StatusBadRequest, errors.New("Inavlid Id"))
		return
	}
	var menu models.Menu
	if err := c.ShouldBindJSON(&menu); err != nil {
		utils.ErrorHandler(c, http.StatusBadRequest, errors.New("Bad request"))
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Update successful",
		"id":      id,
	})
}
