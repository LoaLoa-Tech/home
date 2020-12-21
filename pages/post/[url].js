import { request, gql } from "graphql-request";
import { Remarkable } from "remarkable";
var md = new Remarkable("full", { breakes: true, html: true });
import { useRouter } from "next/router";
import { Fragment } from "react";
import Link from "next/link";

const Post = ({ markdownPost, folderBrowser: { files, folders } }) => {
  return (
    <section class="container">
      <div class="row">
        <div class="col-12 col-md-4">
          <ul class="list-unstyled">
            {files?.map((file) => {
              return (
                <Link href={"/post/" + file.url}>
                  <li>
                    <h5 class="ml-3">
                      <Link href={"/post/" + file.url}>
                        <a className="text-body">{file.name}</a>
                      </Link>
                    </h5>
                  </li>
                </Link>
              );
            })}
          </ul>

          {folders.map((folder) => {
            return (
              <Fragment>
                <h4>{folder.name}</h4>
                <ul class="list-unstyled">
                  {folder?.files.map((file) => {
                    return (
                      <li>
                        <h5 class="ml-3">
                          <Link href={"/post/" + file.url}>
                            <a className="text-body">{file.name}</a>
                          </Link>
                        </h5>
                      </li>
                    );
                  })}
                  {/* <%category.items.map(item => {%> */}
                </ul>
              </Fragment>
            );
          })}
        </div>
        <div class="col-12 col-md-8">
          <article
            dangerouslySetInnerHTML={{
              __html: md.render(markdownPost.content),
            }}
          />
        </div>
      </div>
    </section>
  );
};

export async function getStaticPaths() {
  var paths = [];
  const {
    folderBrowser: { folders = [], files = [] },
  } = await request(
    "http://localhost:3001/admin/api",
    gql`
      query {
        folderBrowser(url: "/docs", type: [".md", ".mdx"]) {
          name
          url
          files {
            name
            url
          }
          folders {
            name
            url
            files {
              name
              url
            }
            folders {
              name
              url
              files {
                name
                url
              }
            }
          }
        }
      }
    `
  );
  files?.map((file) => paths.push("/post/" + file.url));
  folders?.map((folders) => {
    folders?.files?.map((file) => paths.push("/post/" + file.url));
    folders?.folders?.map((folders) => {
      folders?.files?.map((file) => paths.push("/post/" + file.url));
    });
  });

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(ctx) {
  const { url } = ctx.params;

  const { markdownPost, folderBrowser } = await request(
    "http://localhost:3000/admin/api",
    gql`
      query {
        markdownPost(
          url: "${url}"
        ) {
          name
          url
          content
        }
        folderBrowser(url: "_${url
          .split("_")
          .slice(1, 3)
          .join("_")}", type: [".md", ".mdx"]) {
          name
          url
          files {
            name
            url
          }
          
          folders {
            name
            url
            files {
              name
              url
            }
          }
        
        }
      }
    `
  );

  return { props: { markdownPost, folderBrowser } };
}
export default Post;
