DEVENV=devenv
SYSDEPS=build-essential python3-virtualenv tox

.PHONY: all
all: help

$(DEVENV):
	tox -e $(DEVENV)

dev: $(DEVENV)

.PHONY: generate
generate: dev
	devenv/bin/generate schemas/schemas-juju-latest.json

.PHONY: dist
dist: clean dev check
	$(DEVENV)/bin/python setup.py sdist bdist_wheel

.PHONY: check
check:
	tox

.PHONY: clean
clean:
	rm -rf $(DEVENV) .tox dist *.egg-info output/*.js

.PHONY: help
help:
	@echo "make sysdeps - install system dependencies (debian packages)"
	@echo "make dev - create the development environment"
	@echo "make generate - generate API in the output dir using latest schema"
	@echo "make test - run unit tests in the development enviroment"
	@echo "make lint - run lint in the development environment"
	@echo "make check - run lint and tests on the resulting packages"
	@echo "make clean - clean up the devlopment environment"
	@echo "make tag - tag a new release"
	@echo "make release - create a new release and upload it to PyPI"

.PHONY: lint
lint: dev
	$(DEVENV)/bin/flake8 . --exclude .tox,devenv

.PHONY: release
release: dist
	$(DEVENV)/bin/pip install twine
	$(DEVENV)/bin/twine upload dist/*

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
