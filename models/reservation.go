package models

import (
	"fmt"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Reservation struct {
	ID        primitive.ObjectID `bson:"_id,omitempty"  json:"_id,omitempty"`
	FirstName string             `bson:"first_name" json:"first_name"`
	LastName  string             `bson:"last_name" json:"last_name"`
	Email     string             `bson:"email" json:"email"`
	Phone     string             `bson:"phone" json:"phone"`
	Notes     string             `bson:"notes" json:"notes"`
	Date      string             `bson:"date" json:"date"`
	Time      string             `bson:"time" json:"time"`
	Seats     string             `bson:"seats" json:"seats"`
	Status    string             `bson:"status" json:"status"`
}

func NewReservation(reservation Reservation) *Reservation {

	return &Reservation{
		ID:        reservation.ID,
		FirstName: reservation.FirstName,
		LastName:  reservation.LastName,
		Email:     reservation.Email,
		Phone:     reservation.Phone,
		Notes:     reservation.Notes,
		Date:      reservation.Date,
		Time:      reservation.Time,
		Seats:     reservation.Seats,
		Status:    "booked",
	}
}

func ValidateReservationData(reservation Reservation) error {

	if reservation.FirstName == "" || reservation.LastName == "" || reservation.Email == "" || reservation.Phone == "" || reservation.Date == "" || reservation.Time == "" || reservation.Seats == "" {
		return fmt.Errorf("invalid reservation data")
	}
	return nil
}
