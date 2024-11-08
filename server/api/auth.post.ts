export default eventHandler(async (event) => {
  const body = await readBody(event) || {}

  if (!body) {
    return { error: 'Request body is empty or undefined' }
  }

  process.stdout.write('v1')
  process.stdout.write(body)

  const session = await getUserSession(event)
  const adminPassword = process.env.NUXT_ADMIN_PASSWORD || 'admin'

  if (session.lastAttemptAt && Date.now() - session.lastAttemptAt < 5000)
    throw createError({ statusCode: 429, statusMessage: 'Too Many Requests' })

  if (body.password === adminPassword) {
    await setUserSession(event, {
      user: { role: 'admin' }
    })

    return { loggedIn: true }
  }

  await setUserSession(event, { lastAttemptAt: Date.now() })

  throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
})
