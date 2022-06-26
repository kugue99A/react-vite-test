build:
	chmod +x pre-commit
	docker compose build
	docker compose run --rm frontend npm install
