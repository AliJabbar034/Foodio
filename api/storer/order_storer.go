package storer

import (
	"context"
	"fmt"

	"github.com/alijabbbar034/foodApp/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

type Order_Storer interface {
	CreateOrder(models.Order) error
	CancelOrder(id primitive.ObjectID) (int64, error)
	GetOrderByID(id primitive.ObjectID) (*models.Order, error)
}

type Order_Mongo struct {
	db *mongo.Collection
}

func New_Order_MOngo(db *mongo.Database) *Order_Mongo {
	return &Order_Mongo{
		db: db.Collection("order"),
	}
}

func (o *Order_Mongo) CreateOrder(order models.Order) error {

	_, err := o.db.InsertOne(context.Background(), &order)
	if err != nil {
		return err
	}

	return nil

}

func (o *Order_Mongo) CancelOrder(id primitive.ObjectID) (int64, error) {

	filter := bson.M{"_id": id}

	update := bson.M{"$set": bson.M{
		"status": "cancelled",
	}}

	result, err := o.db.UpdateOne(context.Background(), filter, update)
	if err != nil {
		return 0, err
	}

	return result.ModifiedCount, nil
}

func (o *Order_Mongo) GetOrderByID(id primitive.ObjectID) (*models.Order, error) {

	var order models.Order
	filter := bson.M{"_id": id}

	if err := o.db.FindOne(context.Background(), filter).Decode(&order); err != nil {
		return nil, err
	}

	fmt.Println("Order", order)

	return &order, nil
}
