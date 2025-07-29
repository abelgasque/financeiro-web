export const environment = {
  production: true,
  apiUrl: 'https://financeiro-api-w8um.onrender.com',
  tokenWhitelistedDomains: [ new RegExp('financeiro-api-w8um.onrender.com') ],
  tokenBlacklistedRoutes: [ 
    new RegExp('\/oauth\/token'),
    new RegExp('\/pessoas\/adicionar'), 
    new RegExp('\/usuarios\/validar-autenticacao') 
  ]
};
