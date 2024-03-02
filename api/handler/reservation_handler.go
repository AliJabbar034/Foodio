package handler

import (
	"errors"
	"log"
	"net/http"

	"github.com/alijabbbar034/foodApp/api/storer"
	"github.com/alijabbbar034/foodApp/models"
	"github.com/alijabbbar034/foodApp/utils"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type reservation_Handler struct {
	resStorer storer.Reservation_storer
}

func New_Reservation(db storer.Reservation_storer) *reservation_Handler {

	return &reservation_Handler{
		resStorer: db,
	}
}

func (r *reservation_Handler) CreateRes_Handler(c *gin.Context) {

	var reservation models.Reservation
	if err := c.ShouldBindJSON(&reservation); err != nil {
		log.Println("Error", err.Error())
		utils.ErrorHandler(c, http.StatusBadRequest, errors.New("bad request"))
		return
	}
	log.Println("Reservation", reservation)

	if err := models.ValidateReservationData(reservation); err != nil {
		utils.ErrorHandler(c, http.StatusBadRequest, errors.New("bad request"))
		return
	}
	reserData := models.NewReservation(reservation)
	id, err := r.resStorer.CreateReservation(*reserData)

	if err != nil {
		utils.ErrorHandler(c, http.StatusInternalServerError, errors.New("failed to create reservation"))
		return
	}
	c.JSON(http.StatusCreated, gin.H{
		"message": "Reservation Created",
		"id":      id,
	})

}

func (r *reservation_Handler) CancelRes_Handler(c *gin.Context) {
	_id := c.Param("id")
	id, err := primitive.ObjectIDFromHex(_id)
	if err != nil {
		utils.ErrorHandler(c, http.StatusBadRequest, errors.New("Inavlid Id"))
		return
	}

	count, err := r.resStorer.CancelReservation(id)
	if err != nil {
		utils.ErrorHandler(c, http.StatusInternalServerError, errors.New("error cancelling reservation"))
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Reservation Cancelled",
		"count":   count,
	})
}
