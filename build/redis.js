var redis = require('redis')
const client = redis.createClient({ password: '123456' })
const { promisify } = require('util')
const setAsync = promisify(client.set).bind(client)
const getAsync = promisify(client.get).bind(client)
const redisKey = 'remote_version'

const set = async () => {
  const now = await getAsync(redisKey)
  console.log(now)
  const version = require('../package.json').version
  if (!now) {
    await setAsync(redisKey, JSON.stringify({ template: version }))
  } else {
    const { component } = JSON.parse(now)
    await setAsync(redisKey, JSON.stringify({ template: version, component }))
  }
  console.log(`更新完成${version}`)
  process.exit(0)
}

set().catch(err => {
  console.log(err)
})
