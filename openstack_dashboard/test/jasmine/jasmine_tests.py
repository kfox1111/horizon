#
#    (c) Copyright 2015 Hewlett-Packard Development Company, L.P.
#
# Licensed under the Apache License, Version 2.0 (the "License"); you may
# not use this file except in compliance with the License. You may obtain
# a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
# WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
# License for the specific language governing permissions and limitations
# under the License.


from horizon.test.jasmine import jasmine_tests as test

LAUNCH_INST = "dashboard/launch-instance"


class ServicesTests(test.ServicesTests):

    # We rely on sources from horizon
    # therefore, we must append the sources
    dashboard_sources = [
        'dashboard/dashboard.module.js',
        'dashboard/workflow/workflow.js',
        LAUNCH_INST + '/launch-instance.js',
        LAUNCH_INST + '/launch-instance.model.js',
        LAUNCH_INST + '/security-groups/security-groups.js',
        LAUNCH_INST + '/keypair/keypair.js',
        LAUNCH_INST + '/configuration/configuration.js',
        LAUNCH_INST + '/flavor/flavor.js',
        LAUNCH_INST + '/network/network.js',
        LAUNCH_INST + '/source/source.js',
    ]

    # We are only testing dashboard specs here
    # so we override the parent specs
    specs = [
        'dashboard/dashboard.module.js',
        'dashboard/workflow/workflow.js',
        LAUNCH_INST + '/launch-instance.spec.js',
        LAUNCH_INST + '/launch-instance.model.spec.js',
        LAUNCH_INST + '/security-groups/security-groups.spec.js',
        LAUNCH_INST + '/keypair/keypair.spec.js',
        LAUNCH_INST + '/configuration/configuration.spec.js',
        LAUNCH_INST + '/flavor/flavor.spec.js',
        LAUNCH_INST + '/network/network.spec.js',
        LAUNCH_INST + '/source/source.spec.js',
    ]
    externalTemplates = []

    def __init__(self, *args, **kwargs):
        super(test.ServicesTests, self).__init__(*args, **kwargs)
        self.sources = self.sources.extend(self.dashboard_sources)
