watch:
	webpack -d --watch

production:
	APP_ENV=production webpack -p

.PHONY: watch build
