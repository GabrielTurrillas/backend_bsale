# backend_bsale
Backend Bsale

API Documentation 

Backend Bsale es una API REST para la creación de aplicaciones de tiendas web. Contiene 4 endpoints
```/api/product Retorna todos los registros de la tabla product```  <br />
```/api/product/{product} Retorna un conjunto de registros que contienen {product} en el campo name``` <br/>
```/api/product/category/{id} Retorna un conjunto de registros de una categoría especifica```<br />
```/api/product/category Retorna todos los registros de la tabla categoría```<br />


```
{
  "openapi": "3.0.0",
  "info": {
    "title": "Bsale Products API",
    "version": "1.0.0"
  },
  "paths": {
    "/api/product": {
      "get": {
        "responses": {
          "200": {
            "description" : "Retrieve all the records from the product table",
            "content": {
              "schema": {
                "$ref": "#/components/schemas/product"
              }
            }
          }
        }
      }
    },
    "/api/product/{product}": {
      "get": {
        "parameters": [
          {
            "name": "product",
            "in": "path",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description" : "Retrieve all records that match the 'product' parameter",
            "content": {
              "schema": {
                "$ref": "#/components/schemas/product"
              }
            }
          }
        }
      }
    },
    "/api/product/category/{id}": {
      "get": {
        "paremeters":[
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema" : {
              "type": "integer"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Retrieve all records that match the given category id",
            "content": {
              "schema": {
                "$ref": "#/components/schemas/product"
              }
            }
          }
        }
      }
    }
  },
  "/api/product/category":{
    "get": {
      "responses": {
        "200": {
          "description": "Retrieve all records in the category table",
          "content": {
            "schema": {
              "$ref": "#/components/schemas/category"
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "product": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "name": {
            "type": "string"
          },
          "url_image": {
            "type": "string"
          },
          "price": {
            "type": "number"
          },
          "discount": {
            "type": "integer"
          },
          "category": {
            "type": "integer"
          }
        }
      },
      "category": {
        "type":"object",
        "properties": {
          "id": {
            "type": "integer"
          }, 
          "name": {
            "type": "name"
          }
        }
      }
    }
  }
}
```