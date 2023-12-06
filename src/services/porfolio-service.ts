import { AboutMe } from "@/interface/aboutme.interface";
import { Contacts } from "@/interface/contact.interface";
import { PortfolioType } from "@/interface/portfolio.interface";
import { Project } from "@/interface/projects.interface";
import {request, gql} from "graphql-request"

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string

export const PortfolioServece = {
    async getAllApps () {
        const query = gql`
            query getApps {
                app {
                    id
                    exert
                    title
                    image {
                        url
                        }
                    aboutme {
                        id
                        name
                            avatar {
                                url
                            }
                        }
                    }
                }
        `;

        const result = await request<{app : PortfolioType[]}>(graphqlAPI, query)
        return result.app
    },

    async getAboutMe() {
        const query = gql`
            query AboutMe {
                aboutmes {
                    name
                    id
                    description
                    avatar {
                        url
                    }
                    aboutInfo {
                        text
                        html
                    }
                }
                }
        `;
        const result = await request<{aboutmes :AboutMe[] }>(graphqlAPI,query);
        return result.aboutmes;
    },

    async getProjects() {
        const query = gql`
            query Projects {
                project {
                id
                proName
                proDescription
                project
                proAdress
                information {
                text
               
                }
                proImage {
                url
                }
            }
            }
        `;
        const result = await request<{project : Project[]}>(graphqlAPI, query);
        return result.project;
    },
    async getDetailedProject(project : string) {
        const query = gql`
            query DetailedProject ($project : String!)  {
                project(where: {project: $project}) {
                    id
                    proName
                    project
                    proDescription
                    proAdress
                    proImage {
                        url
                    }
                    information {
                        text
                        html
                    }
                    
                }
                }
        `;

        const result = await request<{project : Project[]}>(graphqlAPI, query, {project});
        return result.project;
    },
     async getContact() {
        const query = gql`
            query Contact {
                contacts {
                    id
                    address
                    email
                    github
                    phoneNumber
                    instagram
                    telegram
                }
                }
        `;
        const result = await request<{contacts : Contacts[] }>(graphqlAPI, query)
        return result.contacts;
     }



}