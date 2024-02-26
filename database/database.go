package database

import (
	"context"
	"fmt"
	"os"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func ConnectDB() *mongo.Database {

	uri := os.Getenv("MONGO_URL")

	client, err := mongo.Connect(context.Background(), options.Client().ApplyURI(uri))
	if err != nil {
		fmt.Println(err.Error())
		panic(err)

	}

	coll := client.Database("Food")

	return coll
}
