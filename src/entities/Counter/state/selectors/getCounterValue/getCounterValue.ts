import { createSelector } from '@reduxjs/toolkit'
import { getCounter } from '../getCounter/getCounter'
import { type CounterSchema } from 'entities/Counter'

export const getCounterValue = createSelector(getCounter, (counter: CounterSchema) => counter.number)
