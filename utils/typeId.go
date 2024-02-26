package utils

import (
	"errors"
	"fmt"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

func IdChange(id string) (*primitive.ObjectID, error) {

	_id, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		fmt.Println(err.Error())
		return nil, errors.New("Inavlid Id")
	}

	return &_id, nil

}
