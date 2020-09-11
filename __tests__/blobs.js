const supertest = require("supertest")
const server = require("../server")
const db = require("../data/config")

beforeEach(async () => {
    // runs the seed before the run of each test to start fresh
    await db.seed.run()
})

afterAll(async () => {
    // closes the database connection so the test doesn't hang
    await db.destroy()
})

describe("blobs integration tests", () => {
    it("GET /api/blobs", async () => {
        const res = await supertest(server).get("/api/blobs")
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body).toHaveLength(5)
        expect(res.body[2].name).toBe("Blob Ross")
    })
    it("GET /api/blobs/:id", async () => {
        const res = await supertest(server).get("/api/blobs/2")
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body.name).toBe("Aunty Blob")
    })
    it("GET /api/blobs/:id -Not found", async () => {
        const res = await supertest(server).get("/api/blobs/30")
        expect(res.statusCode).toBe(404)
    })
    it("POST /api/blobs", async () => {
        const res = await supertest(server)
            .post("/api/blobs")
            .send({name: "Boss Blob"})
        expect(res.statusCode).toBe(201)
        expect(res.type).toBe("application/json")
        expect(res.body.name).toBe("Boss Blob")
    })
    it("POST /api/blobs", async () => {
        const res = await supertest(server)
            .post("/api/blobs")
            .send({name: "Baby Blob"})
            expect(res.statusCode).toBe(201)
            expect(res.type).toBe("application/json")
            expect(res.body.name).toBe("Baby Blob")
    })
    it("PUT /api/blobs/:id", async () => {
        const res = await supertest(server)
        .put("/api/blobs/1")
        .send({name: "Bobby Blob"})
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body.name).toBe("Bobby Blob")
    })
    it("PUT /api/blobs/:id", async () => {
        const res = await supertest(server)
        .put("/api/blobs/2")
        .send({name: "Aunty Shirley Blob"})
        expect(res.statusCode).toBe(200)
        expect(res.type).toBe("application/json")
        expect(res.body.name).toBe("Aunty Shirley Blob")
    })
    it("DELETE /api/blobs/:id", async () => {
        const res = await supertest(server)
        .delete("/api/blobs/1")
        expect(res.statusCode).toBe(204)
    })
    it("DELETE /api/blobs/:id -Not found", async () => {
        const res = await supertest(server).delete("/api/blobs/10")
        expect(res.statusCode).toBe(404)
    })
})