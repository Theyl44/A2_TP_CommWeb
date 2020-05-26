import asyncio
import websockets

clients = set()

async def clientHandler(websocket, path):
    receivedMessage = await websocket.recv()
    print("Message recu : "+ receivedMessage)
    await websocket.send(receivedMessage)

start_server = websockets.serve(clientHandler, "localhost", 12345)
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()