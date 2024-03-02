package storer

import (
	"context"
	"fmt"
	"log"

	"github.com/alijabbbar034/foodApp/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

type User_Storer interface {
	RegisterUser(user models.User) (*models.User, error)
	GetByEmail(email string) (*models.User, error)
	GetByID(id primitive.ObjectID) (*models.User, error)
	DeleteUser(primitive.ObjectID) (int64, error)
	UpdateUser(models.User, primitive.ObjectID) (int64, error)
	GetAllUsers() ([]models.User, error)
}

type user_Mongo struct {
	db *mongo.Collection
}

func NewUserMongo(db *mongo.Database) *user_Mongo {

	return &user_Mongo{
		db: db.Collection("users"),
	}
}

func (m *user_Mongo) RegisterUser(user models.User) (*models.User, error) {

	log.Println("requesting user+v", user)
	result, err := m.db.InsertOne(context.Background(), &user)
	if err != nil {
		fmt.Println(err.Error())
		return nil, err
	}

	id := result.InsertedID.(primitive.ObjectID)
	user.ID = id
	return &user, nil
}

func (m *user_Mongo) GetByEmail(email string) (*models.User, error) {

	var user models.User
	filter := bson.M{"email": email}

	if err := m.db.FindOne(context.Background(), filter).Decode(user); err != nil {
		return nil, err
	}

	return &user, nil
}

func (m *user_Mongo) GetByID(id primitive.ObjectID) (*models.User, error) {

	filter := bson.M{"_id": id}

	var user models.User
	if err := m.db.FindOne(context.Background(), filter).Decode(user); err != nil {
		return nil, err
	}

	return &user, nil
}

func (m *user_Mongo) DeleteUser(id primitive.ObjectID) (int64, error) {

	filter := bson.M{"_id": id}
	result, err := m.db.DeleteOne(context.Background(), filter)
	if err != nil {
		return 0, err
	}
	return result.DeletedCount, nil
}

func (m *user_Mongo) UpdateUser(user models.User, id primitive.ObjectID) (int64, error) {

	filter := bson.M{"_id": id}

	updated := bson.D{{}}
	if user.FirstName != "" {
		updated = append(updated, bson.E{"$set", bson.D{{"name", user.FirstName}}})
	}
	if user.Email != "" {
		updated = append(updated, bson.E{"$set", bson.D{{"email", user.Email}}})
	}

	updatedCount, err := m.db.UpdateOne(context.Background(), filter, updated)
	if err != nil {
		return 0, err
	}
	return updatedCount.ModifiedCount, nil

}

func (m *user_Mongo) GetAllUsers() ([]models.User, error) {

	var users []models.User
	cursor, err := m.db.Find(context.Background(), bson.M{})
	if err != nil {
		return nil, err
	}
	if err := cursor.All(context.Background(), &users); err != nil {
		return nil, err
	}

	return users, nil
}
