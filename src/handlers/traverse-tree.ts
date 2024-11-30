import { Context } from "../types";

export async function traverseTree(context: Context) {
  const { payload } = context;

  if (payload.issue.pull_request) {
    //const { repository: { owner, name }, issue: { number: issueNumber } } = payload;
    // const endpoint = octokit.pulls.listReviews;
    // const reviews = await octokit.paginate(endpoint, { owner: owner.login, repo: name, pull_number: issueNumber });
  }
}
