#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals
import os 

# out_path = '{0}/output/'.format(os.path.dirname(os.path.dirname(__name__)))

AUTHOR = u'Joseph VanderStel'
SITENAME = u'Joseph VanderStel'
SITEURL = ''

PATH = 'content'
# OUTPUT_PATH = out_path
PAGE_PATHS = ['pages']

TIMEZONE = 'America/New_York'
DEFAULT_LANG = u'en'

THEME = 'theme'

DEFAULT_PAGINATION = 10

DELETE_OUTPUT_DIRECTORY = False
DISPLAY_PAGES_ON_MENU = False

MENUITEMS = [
	(
		'About', 
		'/about', 
		'fa-question',
		os.path.abspath('content/pages/about.md')),
	(
		'CV', 
		'/cv', 
		'fa-pencil',
		os.path.abspath('content/pages/cv.md')),
	(
		'Projects', 
		'/projects', 
		'fa-wrench',
		os.path.abspath('content/pages/projects/projects.md')),
	# (
	# 	'Maxims', 
	# 	'/maxims', 
	# 	'fa-lightbulb-o',
	# 	os.path.abspath('content/pages/maxims.md')),
	(
		'Contact', 
		'/contact', 
		'fa-envelope',
		os.path.abspath('content/pages/contact.md'))
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
	'projects/post-tonal-melodic-dictation/chpt6/index.html',
	
	'projects/editor.html':
	'projects/euphony/demo/index.html'
}

LOAD_CONTENT_CACHE = False
PAGE_URL = '{slug}'
PAGE_SAVE_AS = '{slug}/index.html'

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True
