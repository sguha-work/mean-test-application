// const login = async ({ email, password, userId, deviceToken, identity }) => new Promise(async (resolve, reject) => {
//     console.log('device token===>', deviceToken);
//     console.log('<userid>', userId);
//     const successResponse = {};
//     try {
//       let userData = [];
//       if (userId) {
//         console.log("userId >>>> ", userId);
//         // getting user deatils
//         userData = await UserService.getUserDetailsById(userId);
//         email = userData.email;
//       } else {
//         console.log('fetching user id');
//         userData = await UserService.getUserDetailsByEmail(email);
//         console.log('user data>>>', userData);
//         if (Array.isArray(userData) && userData.length) {
//           userId = userData[0]["_id"];
//           console.log("userId>>>>", userId);
//         }
//       }
  
//       // add data validation if required
//       const cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();
//       const userLogin = await cognitoidentityserviceprovider
//         .adminInitiateAuth({
//           AuthFlow: "ADMIN_NO_SRP_AUTH",
//           ClientId: process.env.COGNITO_CLIENT_ID,
//           UserPoolId: process.env.COGNITO_USER_POOL_ID,
//           AuthParameters: {
//             USERNAME: email,
//             PASSWORD: password,
//           },
//         })
//         .promise();
//       console.log('<<userLogin>>', userLogin);
//       if (deviceToken && userId) {
//         // checing if device token is registered in database or not
//         // if not registered then registering device token
//         const result = await checkAndRegisterDeviceToken(userId, deviceToken);
//       }
//       let representativeData = false;
//       if (userData.length > 0 && userData[0].authorizedRepresentative) {
//         representativeData = true;
//       }
//       if (userLogin.ChallengeName === "NEW_PASSWORD_REQUIRED") {
//         await cognitoidentityserviceprovider
//           .adminUpdateUserAttributes({
//             UserAttributes: [
//               {
//                 Name: "email_verified" /* required */,
//                 Value: "true",
//               },
//               /* more items */
//             ],
//             Username: email,
//             UserPoolId: process.env.COGNITO_USER_POOL_ID,
//           }).promise();
//         if (userId !== "") {
//           let result = await UserService.markUserAtDBAsVerified(userId);
//         }
//         successResponse.status = 200;
  
//         successResponse.data = {
//           ChallengeName: userLogin.ChallengeName,
//           Session: userLogin.Session,
//           emailVerified: true,
//           userId,
//           authorizedRepresentative: representativeData
//         };
//       } else if (userLogin.AuthenticationResult) {
//         successResponse.status = 200;
//         successResponse.message = "Login Successful.";
//         successResponse.data = userLogin.AuthenticationResult;
//         successResponse.data.authorizedRepresentative = representativeData;
//       }
  
//       resolve(Service.successResponse(successResponse, successResponse.status));
  
//     } catch (error) {
//       console.log('error>>>', error);
//       if (error.code && ["NotAuthorizedException", "ResourceNotFoundException"].indexOf(error.code) !== -1) {
//         error.error = {
//           message: error.message,
//           status: error.statusCode,
//         };
//       }
//       reject(Service.rejectResponse(
//         error.error || error.message || "Invalid input",
//         error.status || error.statusCode || 405
//       ));
//     }
//   });