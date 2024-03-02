package models

import (
	"errors"
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Order struct {
	ID            primitive.ObjectID `bson:"_id" json:"_id"`
	ItemID        primitive.ObjectID `bson:"item_id" json:"item_id"`
	FirstName     string             `bson:"first_name" json:"first_name"`
	LastName      string             `bson:"last_name" json:"last_name"`
	Email         string             `bson:"email" json:"email"`
	Phone         string             `bson:"phone" json:"phone"`
	Address       string             `bson:"address" json:"address"`
	ZipCode       string             `bson:"zip_code" json:"zip_code"`
	City          string             `bson:"city" json:"city"`
	TotalPrice    float64            `bson:"total_price" json:"total_price"`
	Quantity      int                `bson:"quantity" json:"quantity"`
	Status        string             `bson:"status" json:"status"`
	PaymentMethod string             `bson:"payment" json:"payment"`
	CreatedAt     time.Time          `bson:"created_at" json:"created_at"`
}

func NewOrder(order Order) *Order {
	return &Order{
		ID:         order.ID,
		ItemID:     order.ItemID,
		FirstName:  order.FirstName,
		LastName:   order.LastName,
		Email:      order.Email,
		Phone:      order.Phone,
		Address:    order.Address,
		ZipCode:    order.ZipCode,
		City:       order.City,
		TotalPrice: order.TotalPrice,
		Quantity:   order.Quantity,
		Status:     "pending",
		CreatedAt:  time.Now(),
	}
}

func ValidateOrderData(ordr Order) error {

	if ordr.FirstName == "" || ordr.LastName == "" || ordr.Email == "" || ordr.Phone == "" || ordr.Address == "" || ordr.ZipCode == "" || ordr.City == "" || ordr.TotalPrice == 0 || ordr.Quantity == 0 {
		return errors.New("invalid order data")
	}

	return nil

}
