import asyncio
import websockets

clients = []

async def clientHandler(websocket, path):
    clients.append(websocket)
    async for message in websocket:
        for client in clients: 
            print("Message recu : "+ message)
            await client.send(message)

            
    # receivedMessage = await websocket.recv()
    # receivedMessage = await websocket.recv()
    # print("Message recu : "+ receivedMessage)
    # await websocket.send(receivedMessage)

start_server = websockets.serve(clientHandler, "localhost", 12345)
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()