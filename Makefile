setup: init reset test
reset: clean install
rebuild: install build
rebuild-clean: reset build

init:
	([ ! -e .git/hooks/pre-push ] || rm .git/hooks/pre-push) && ln -s ../../bin/pre-push .git/hooks

clean:
	[ ! -d lib ] || find lib -type f \( -iname \*.js -o -iname \*.d.ts \) -delete
	[ ! -d node_modules ] || rm -rf node_modules

start:
	npm start

build:
	npm run build

install:
	npm install

audit:
	npm audit

test: lint
	CI=true npm test

lint:
	npm run lint

fix:
	npm run lint:fix

ci: audit reset test

.PHONY: setup reset rebuild rebuild-clean init clean start build install audit test lint fix ci
