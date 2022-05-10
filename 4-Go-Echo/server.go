package main

import (
	"io/ioutil"
        "log"
	"net/http"
	"github.com/labstack/echo/v4"
)

func getWetherJson() []byte {
	resp, err := http.Get("https://api.openweathermap.org/data/2.5/weather?lat=53.1235&lon=18.0076&appid=338e220c0da5e9b16126a5f7e36ba89e")
	
	if err != nil {
		log.Fatal(err)
	}

	defer resp.Body.Close()
	json, _ := ioutil.ReadAll(resp.Body)
	
	return json
}
func main() {
	e := echo.New()
	e.GET("/", func(c echo.Context) error {
		wetherJson := getWetherJson()
		return c.JSONBlob(http.StatusOK, wetherJson)
	})
	e.Logger.Fatal(e.Start(":1323"))
}

