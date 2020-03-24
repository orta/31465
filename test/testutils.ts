import { ReactTestInstance, act } from 'react-test-renderer'
import { wait } from '@apollo/react-testing'

// `await waitForApollo()` will wait until mocks are returned from Apollo's MockedProvider.
export const waitForApollo = async () => {
  await act(async () => {
    await wait(0)
  })
}

