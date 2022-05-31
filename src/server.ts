import express, {Request, Response} from "express"
import kafka from "kafka-node"
import "dotenv/config"
import { User } from "./database/models/user"


const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3031
const client = new kafka.KafkaClient({kafkaHost: process.env.KAFKA_HOST})
const producer = new kafka.Producer(client)

producer.on('ready', async () => {
    app.post('/', async (req: Request, res: Response) => {
        producer.send([{
            topic: process.env.KAFKA_TOPIC!,
            messages: JSON.stringify(req.body)
        }], async (err, data) => {
            if(err) console.log(err)
            else {
                await User.create(req.body)
                console.log(data)
            }
        })
    })  
})

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})