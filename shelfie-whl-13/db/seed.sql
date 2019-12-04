CREATE TABLE products (
id serial PRIMARY KEY NOT NULL,
image_url TEXT,
product_name varchar(40) NOT NULL,
price NUMERIC NOT NULL
)

INSERT INTO products(image_url, product_name, price)
VALUES('https://images.halloweencostumes.com/products/54423/1-1/tipsy-elves-mens-roof-santa-ugly-christmas-sweater.jpg', 'Santa poopin sweater', 89.99)

INSERT INTO products(image_url, product_name, price)
VALUES ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtdgIuXf2vCHOv39Z47nTBDRjqG7-rs-DGx_S-LRJKTKRKRkxK&s', 'POTUS Sweater', 1.99)

INSERT INTO products (image_url, product_name, price)
VALUES ('https://i.etsystatic.com/5648529/r/il/b6f6a4/885869183/il_570xN.885869183_ekt1.jpg', 'Betty Sweaty', 149.99)

