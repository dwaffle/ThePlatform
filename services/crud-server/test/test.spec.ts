import {expect} from 'chai'
import {UserModel} from '../src/models/user'
import {ArticleModel} from '../src/models/article'
import {PaymentModel} from '../src/models/payment'
import {OrganizationModel} from '../src/models/organization'

describe('User Tests', () => {
    it('should get all the users', async () => {
        const users = await UserModel.getAll();
        expect(users).to.not.be.undefined;
    })

    it('should get a single user by user name', async () => {
        const user = await UserModel.getByUsername("Doug");
        expect(user).to.not.be.undefined;
    })

    it('should not get a user that does not exist', async () => {
        const user = await UserModel.getByUsername("")
        expect(user).to.be.empty
    })
})

describe('Article Tests', () => {
    it('should get all the articles', async () => {
        const articles = await ArticleModel.getAll();
        expect(articles).to.not.be.undefined;
    })

    it('should get the article with ID 103', async () => {
        const article = await ArticleModel.getById(103);
        expect(article).to.not.be.undefined;
    })

    it('should not get an article that doesn\'t exist', async () => {
        const article = await ArticleModel.getById(0);
        expect(article).to.be.empty
    })
})

describe('Organization Tests', () => {
    it('should get all the organizations', async () => {
        const orgs = await OrganizationModel.getAll()
        expect(orgs).to.not.be.empty
    })
    it('should get a single organization', async () => {
        const org = await OrganizationModel.getById(1)
        expect(org).to.not.be.empty
    })
    it('should get the users in an organization', async () => {
        const users = await OrganizationModel.getOrgUsers(1)
        expect(users).to.not.be.empty
    })
})

describe('Payment Tests', () => {
    it('should get a user\'s payment info', async () => {
        const payment = await PaymentModel.retrieve(1)
        expect(payment).to.not.be.empty
    })
})