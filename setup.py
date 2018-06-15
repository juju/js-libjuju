# Copyright 2018 Canonical Ltd.
# Licensed under the LGPLv3, see LICENCE.txt file for details.

"""Set up the application package."""

from codecs import open
from os import path
from setuptools import (
    find_packages,
    setup,
)


here = path.abspath(path.dirname(__file__))
with open(path.join(here, 'README.rst'), encoding='utf-8') as f:
    long_description = f.read()

setup(
    name='js-libjuju',
    version='0.1.0',
    description='Generate the JavaScript Juju API client',
    long_description=long_description,
    url='https://github.com/juju/jujulibjs',
    author='Canonical JAAS Team',
    author_email='jaas@canonical.com',
    classifiers=[  # Optional
        'Development Status :: 4 - Beta',
        'Intended Audience :: Developers',
        'Topic :: Database',
        'Topic :: Software Development :: Build Tools',
        'License :: OSI Approved :: '
        'GNU Lesser General Public License v3 (LGPLv3)',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3.6',
    ],
    keywords='juju api client javascript',
    packages=find_packages(exclude=['docs', 'tests']),
    install_requires=[
        'Jinja2',
    ],
    entry_points={
        'console_scripts': [
            'generate=generator:generate',
        ],
    },
)
