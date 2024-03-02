package storer

import (
	"context"

	"github.com/alijabbbar034/foodApp/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

type Reservation_storer interface {
	CreateReservation(models.Reservation) (string, error)
	CancelReservation(id primitive.ObjectID) (int64, error)
}

type reservation_mongo struct {
	db *mongo.Collection
}

func New_Reservation_Mongo(db *mongo.Database) *reservation_mongo {
	return &reservation_mongo{
		db: db.Collection("reservation"),
	}
}

func (r *reservation_mongo) CreateReservation(reservation models.Reservation) (string, error) {

	result, err := r.db.InsertOne(context.Background(), &reservation)
	if err != nil {
		return "", err
	}
	id := result.InsertedID.(primitive.ObjectID).Hex()

	return id, nil

}

func (r *reservation_mongo) CancelReservation(id primitive.ObjectID) (int64, error) {

	filter := bson.M{"_id": id}

	update := bson.M{"$set": bson.M{
		"status": "cancelled",
	}}

	updated, err := r.db.UpdateOne(context.Background(), filter, update)
	if err != nil {
		return 0, err
	}

	return updated.ModifiedCount, nil
}
