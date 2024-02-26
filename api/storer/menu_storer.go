package storer

import "go.mongodb.org/mongo-driver/mongo"

type Menu_storer interface{}

type menu_Mongo struct {
	db *mongo.Collection
}

func NewMenu_storer(db *mongo.Database) *menu_Mongo {

	return &menu_Mongo{
		db: db.Collection("menu"),
	}
}
