export async function getRecentRepos(): Promise<Repo[]> {
    const resp = await fetch('/api/github-activity')
    if (!resp.ok) throw new Error('GitHub API error')
    return resp.json()
}