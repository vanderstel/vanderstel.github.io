#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals
import os

AUTHOR = u'Joseph VanderStel'
SITENAME = u'Joseph VanderStel'
SITEURL = ''
PATH = 'content'
OUTPUT_PATH = 'output'
PAGE_PATHS = ['pages']
TIMEZONE = 'America/New_York'
DEFAULT_LANG = u'en'
THEME = 'theme'
DEFAULT_PAGINATION = 10
DELETE_OUTPUT_DIRECTORY = True
DISPLAY_PAGES_ON_MENU = False
LOAD_CONTENT_CACHE = False
PAGE_URL = '{slug}'
PAGE_SAVE_AS = '{slug}/index.html'

STATIC_PATHS = ['pdfs']
# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

MENUITEMS = [
	(
		'About',
		'/about',
		os.path.abspath('content/pages/about.md')
	),
	(
		'CV',
		'/cv',
		os.path.abspath('content/pages/cv.md')
	),
	(
		'Projects',
		'/projects',
		os.path.abspath('content/pages/projects/projects.md')
	),
	(
		'Contact',
		'/contact',
		os.path.abspath('content/pages/contact.md')
	)
]

TEMPLATE_PAGES = {
	'projects/post_tonal_melodic_dictation.html':
	'projects/post-tonal-melodic-dictation/index.html',

	'projects/post_tonal_trichordal_dictation.html':
	'projects/post-tonal-trichordal-dictation/index.html',

	'projects/chpt1.html':
	'projects/post-tonal-melodic-dictation/chpt1/index.html',

	'projects/chpt2.html':
	'projects/post-tonal-melodic-dictation/chpt2/index.html',

	'projects/chpt6.html':
	'projects/post-tonal-melodic-dictation/chpt6/index.html'
}
