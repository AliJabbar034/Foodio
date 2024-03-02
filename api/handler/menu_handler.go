package handler

import (
	"errors"
	"net/http"
	"path/filepath"
	"strconv"
	"time"

	"github.com/alijabbbar034/foodApp/api/storer"
	"github.com/alijabbbar034/foodApp/models"
	"github.com/alijabbbar034/foodApp/utils"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

const uploadFileLocation string = "./resources/images/"

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
	var images []string
	form, _ := c.MultipartForm()
	files := form.File["file"]
	for _, file := range files {
		fileName := filepath.Join(uploadFileLocation + time.Now().Format("2006-01-02_15-04-05_") + file.Filename)

		c.SaveUploadedFile(file, fileName)
		images = append(images, fileName)

	}

	if err := c.ShouldBindJSON(&menu); err != nil {
		utils.ErrorHandler(c, http.StatusBadRequest, errors.New("bad request"))
		return
	}
	if err := models.ValidateMenu(menu); err != nil {
		utils.ErrorHandler(c, http.StatusBadRequest, errors.New("invalid menu data"))
		return
	}

	menuData := models.NewMenu(menu, images)

	m.storer.CreateMenu(*menuData)

}

func (m *menu_Handler) GetAllMenuItem_Handler(c *gin.Context) {

	query := c.Query("query")
	pageSize := c.Query("limit")
	page, _ := strconv.Atoi(pageSize)
	if page == 0 {
		page = 10
	}

	data, err := m.storer.GetAllMenuItem(query, page)
	if err != nil {
		utils.ErrorHandler(c, http.StatusInternalServerError, errors.New("failed to get all items"))
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"message": "Get all menu items",
		"data":    data,
	})
}

func (m *menu_Handler) GetMenuById_Handler(c *gin.Context) {

	_id := c.Param("id")
	id, err := primitive.ObjectIDFromHex(_id)

	if err != nil {
		utils.ErrorHandler(c, http.StatusBadRequest, errors.New("Inavlid Id"))
		return
	}
	menuItem, err := m.storer.GetMenuById(id)
	if err != nil {
		utils.ErrorHandler(c, http.StatusInternalServerError, errors.New("Inavlid Id"))
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Get menu by id",
		"item":    menuItem,
	})
}

func (m *menu_Handler) DeleteMenu_Handler(c *gin.Context) {

	_id := c.Param("id")
	id, err := primitive.ObjectIDFromHex(_id)

	if err != nil {
		utils.ErrorHandler(c, http.StatusBadRequest, errors.New("inavlid Id"))
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
		utils.ErrorHandler(c, http.StatusBadRequest, errors.New("inavlid Id"))
		return
	}
	var menu models.Menu
	if err := c.ShouldBindJSON(&menu); err != nil {
		utils.ErrorHandler(c, http.StatusBadRequest, errors.New("bad request"))
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Update successful",
		"id":      id,
	})
}
