DEVENV=devenv
PROJECT=js-libjuju
SYSDEPS=build-essential python3-virtualenv tox

.PHONY: all
all: help

$(DEVENV):
	tox -e $(DEVENV)

$(NODE_MODULES):
	npm install
	npm ls --depth=0

dev: $(DEVENV)

dev-js: $(NODE_MODULES)

.PHONY: generate
generate: dev
	devenv/bin/generate schemas/schemas-juju-latest.json

.PHONY: dist
dist: clean dev check
	$(DEVENV)/bin/python setup.py sdist bdist_wheel

.PHONY: check
check: check-js
	tox

.PHONY: check-js
check-js: lint-js test-js

.PHONY: clean
clean:
	rm -rf $(DEVENV) .tox dist *.egg-info
	rm -rf $(NODE_MODULES)/ package-lock.json api/facades/*.js

.PHONY: help
help:
	@echo -e "$(PROJECT) - list of make targets:\n"
	@echo "make sysdeps - install system dependencies (debian packages)"
	@echo "make dev - create the development environment"
	@echo "make generate - generate API in api/facades using latest schema"
	@echo "make test - run unit tests"
	@echo "make lint - run lint"
	@echo "make check - run lint and tests on the resulting packages"
	@echo "make clean - clean up the development environment and built files"
	@echo "make tag - tag a new release"
	@echo "make release - create a new release and upload it to PyPI"

.PHONY: lint
lint: dev
	$(DEVENV)/bin/flake8 . --exclude .tox,devenv

.PHONY: lint-js
lint-js: dev-js
	npm run lint

.PHONY: release
release: dist
	$(DEVENV)/bin/pip install twine
	$(DEVENV)/bin/twine upload dist/*

.PHONY: release-js
release-js: clean check dev-js
	$(eval current := $(shell npm view $(PROJECT) version))
	$(eval package := $(shell npm version | grep $(PROJECT) | cut -d "'" -f 2))
	@test $(current) != $(package) || ( \
		echo cannot publish existing version $(current): update package.json; \
		exit 1 \
	)
	git tag $(package)
	git push --tags
	npm publish

.PHONY: sysdeps
sysdeps:
	sudo apt install -y $(SYSDEPS)

.PHONY: tag
tag: dev
	git tag v`$(DEVENV)/bin/python setup.py --version`
	git push --tags origin master

.PHONY: test
test: dev
	$(DEVENV)/bin/python -m unittest discover . -v

.PHONY: test-js
test-js: dev-js
	npm t
