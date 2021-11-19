'use strict'

const { buildSchema } = require('graphql')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')

const schema = buildSchema(
    readFileSync(
        join(__dirname, 'lib', 'schema.graphql'),
        'utf-8'
    )
)