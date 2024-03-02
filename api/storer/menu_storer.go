package storer

import (
	"context"

	"github.com/alijabbbar034/foodApp/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type Menu_storer interface {
	CreateMenu(models.Menu) (string, error)
	GetAllMenuItem(string, int) ([]models.Menu, error)
	GetMenuById(primitive.ObjectID) (*models.Menu, error)
}

type menu_Mongo struct {
	db *mongo.Collection
}

func NewMenu_storer(db *mongo.Database) *menu_Mongo {

	return &menu_Mongo{
		db: db.Collection("menu"),
	}
}

func (m *menu_Mongo) CreateMenu(menu models.Menu) (string, error) {

	insertd, err := m.db.InsertOne(context.Background(), &menu)
	if err != nil {
		return "", err
	}

	return insertd.InsertedID.(primitive.ObjectID).Hex(), nil

}

func (m *menu_Mongo) GetAllMenuItem(query string, pageSize int) ([]models.Menu, error) {
	filter := bson.M{}
	if query != "" && query != "all" {
		filter["category"] = query
	}
	var menus []models.Menu

	filterOption := options.Find()

	filterOption.SetLimit(int64(pageSize))

	cursor, err := m.db.Find(context.Background(), filter, filterOption)
	if err != nil {
		return nil, err
	}
	if err := cursor.All(context.Background(), &menus); err != nil {
		return nil, err
	}

	return menus, nil
}

func (m *menu_Mongo) GetMenuById(id primitive.ObjectID) (*models.Menu, error) {
	var menuitem models.Menu

	filter := bson.M{"_id": id}

	if err := m.db.FindOne(context.Background(), filter).Decode(&menuitem); err != nil {
		return nil, err
	}
	return &menuitem, nil

}
