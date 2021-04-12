export const siginIn = (userId: UserId, password: Password) => {
  fetcher(`https://monoAuth/api/v2/oauth2/token`,'post', {userId, password}
}
