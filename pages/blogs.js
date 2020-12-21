import Head from "next/head";
import { Fragment } from "react";
import { request, gql } from "graphql-request";
import Link from "next/link";
const projects = ({ folders }) => {
  return (
    <Fragment>
      <Head>
        <title>Tài liệu</title>
        <meta
          name="description"
          content="Làm hài lòng khách hàng của bạn. Đơn giản để tạo lập và phát triển."
        />
      </Head>
      <section className="container">
        <div className="row">
          {folders &&
            folders.map((folder) => {
              return (
                <div key={folder.name} className="col-12 col-md-3">
                  <h4 className="text-primary">{folder.name}</h4>
                  <ul className="list-unstyled">
                    <li>
                      {folder.files &&
                        folder.files.map((file) => {
                          return (
                            <h6 key={file.url} className="ml-3">
                              <Link href={"/post/" + file.url}>
                                <a className="text-body">{file.name}</a>
                              </Link>
                            </h6>
                          );
                        })}
                    </li>
                  </ul>
                  {folder.folders &&
                    folder.folders.map((folder) => {
                      return (
                        <div key={folder.url}>
                          <h5>{folder.name}</h5>
                          <ul className="list-unstyled">
                            <li>
                              {folder.files &&
                                folder.files.map((file) => {
                                  return (
                                    <h6 key={file.url} className="ml-3">
                                      <Link href={"/post/" + file.url}>
                                        <a className="text-body">{file.name}</a>
                                      </Link>
                                    </h6>
                                  );
                                })}
                            </li>
                          </ul>
                        </div>
                      );
                    })}
                </div>
              );
            })}
        </div>
      </section>
    </Fragment>
  );
};

export async function getStaticProps(ctx) {
  const {
    folderBrowser: { folders },
  } = await request(
    "http://localhost:3000/admin/api",
    gql`
      query {
        folderBrowser(url: "/blogs", type: [".md", ".mdx"]) {
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
  return { props: { folders } };
}
export default projects;
