import asyncio
import websockets

async def hello(websocket, path):
    receivedMessage = await websocket.recv()
    print("Message reรงu : "+ receivedMessage)
    messageTosend = "Hi Client!"
    await websocket.send(messageTosend)
    
async def clientHandler(websocket, path):
    receivedMessage = await websocket.recv()
    print("Message recu : "+ receivedMessage)

clients = set()
server = websockets.serve(clientHandler, "localhost", 12345)
asyncio.get_event_loop().run_until_complete(server)
asyncio.get_event_loop().run_forever()


    