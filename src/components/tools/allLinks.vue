<template>
    <m3e-content-pane>
        <h2>{{ $t('components.statusRT.allLinks.title') }}</h2>
        <h3><RouterLink to="/">{{ $t('components.statusRT.allLinks.thisSite') }}</RouterLink></h3>
        <p><RouterLink to="/friends">{{ $t('components.statusRT.allLinks.friends') }}</RouterLink></p>
        <p><RouterLink to="/blog">{{ $t('components.statusRT.allLinks.blogList') }}</RouterLink></p>
        <p><RouterLink to="/about">{{ $t('components.statusRT.allLinks.about') }}</RouterLink></p>
        <p><RouterLink to="/manual">{{ $t('components.statusRT.allLinks.manual') }}</RouterLink></p>
        <h3><a href="https://victimsunion.org">N·C·T</a></h3>
        <h3><RouterLink to="/nct">NCT Maps</RouterLink></h3>
        <h3><a href="https://redirecturl.hosinoeiji.workers.dev/torsion">CONVERSION THERAPY EVIDENCE</a></h3>
        <h3><a href="https://redirecturl.hosinoeiji.workers.dev/Github">GitHub</a></h3>
    </m3e-content-pane>
</template>