package storer

import (
	"context"

	"github.com/alijabbbar034/foodApp/models"
	"github.com/alijabbbar034/foodApp/utils"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type Auth_Storer interface {
	GetUserById(string) (*models.User, error)
}
type Auth_Mongo struct {
	db *mongo.Collection
}

func NewAuth_Mongor(db *mongo.Database) *Auth_Mongo {
	return &Auth_Mongo{
		db: db.Collection("user"),
	}
}

func (a *Auth_Mongo) GetUserById(id string) (*models.User, error) {

	_id, err := utils.IdChange(id)
	if err != nil {
		return nil, err
	}
	filter := bson.M{"_id": _id}
	var user models.User
	err = a.db.FindOne(context.Background(), filter).Decode(&user)
	if err != nil {
		return nil, err
	}
	return &user, nil

}
