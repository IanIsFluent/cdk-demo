exports.handler = async function (event) {
  console.log('request:', JSON.stringify(event, undefined, 2));
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/plain' },
    body: `CDK deployed with watch. You've hit ${event.path}\n`,
  };
};
