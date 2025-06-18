import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const token = process.env.GITHUB_TOKEN!
    const query = `
        query {
        viewer {
            repositories(first: 5, orderBy: { field: PUSHED_AT, direction: DESC }) {
            nodes {
                name
                description
                url
                pushedAt
            }
            }
        }
        }
    `
    const resp = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
    })
    if (!resp.ok) return res.status(resp.status).end()
    const { data } = await resp.json()
    res.status(200).json(data.viewer.repositories.nodes)
}
