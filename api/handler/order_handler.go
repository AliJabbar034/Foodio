package handler

import (
	"errors"
	"fmt"
	"net/http"

	"github.com/alijabbbar034/foodApp/api/storer"
	"github.com/alijabbbar034/foodApp/models"
	"github.com/alijabbbar034/foodApp/utils"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type order_Handler struct {
	storer storer.Order_Storer
}

func New_Orderhandler(db storer.Order_Storer) *order_Handler {

	return &order_Handler{
		storer: db,
	}
}

func (o *order_Handler) CreateOrderHandler(c *gin.Context) {

	var order models.Order

	if err := c.ShouldBindJSON(&order); err != nil {
		utils.ErrorHandler(c, http.StatusBadRequest, fmt.Errorf("bad request"))
		return
	}
	if err := models.ValidateOrderData(order); err != nil {
		utils.ErrorHandler(c, http.StatusBadRequest, fmt.Errorf("bad request"))
		return
	}
	if err := o.storer.CreateOrder(order); err != nil {
		utils.ErrorHandler(c, http.StatusInternalServerError, errors.New("error creating order"))
		return
	}

	c.JSON(http.StatusCreated, gin.H{
		"message": "Created Order",
	})
}

func (o *order_Handler) CancelOrderHandler(c *gin.Context) {

	_id := c.Param("id")

	id, err := primitive.ObjectIDFromHex(_id)
	fmt.Println("Order", id)
	if err != nil {
		utils.ErrorHandler(c, http.StatusBadRequest, errors.New("inavlid Id"))
		return
	}
	updatedId, err := o.storer.CancelOrder(id)
	if err != nil {
		utils.ErrorHandler(c, http.StatusInternalServerError, errors.New("error cancelling order"))
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Cancel Order",
		"id":      updatedId,
	})
}

func (o *order_Handler) GetOrderHandler(c *gin.Context) {

	_id := c.Param("id")
	id, err := primitive.ObjectIDFromHex(_id)
	if err != nil {
		utils.ErrorHandler(c, http.StatusBadRequest, errors.New("inavlid Id"))
		return
	}

	order, err := o.storer.GetOrderByID(id)
	if err != nil {
		utils.ErrorHandler(c, http.StatusInternalServerError, errors.New("No Order Found"))
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Get Order",
		"order":   order,
	})
}
