const a=[-.48,.43,.73,-.14,.86,-.02,.26,-.05,.37,.26,.59,-.07,.02,-.74,.7,-.07,.24,.07,-.19,-.05,-.07,-.21,.09,.49,.71,.9,-.23,.08,.4,-.14,.58,-.28,.9,.05,.18,.15,.85,.59,.32,.59,.06,.89,.55,-.1,.13,.44,.09,-.12,.22,.19,.21,-.08,.28,.8,.35,.47,.48,-.02,.24,.85,.28,.82,.77,-.03,.38,-.12,.88,.61,-.06,.02,-.14,.6,.31,-.09,.85,.02,-.07,.24,.4,.02,-.54,.75,-.05,.85,-.18,-.14,.85,.11,-.77,.61,-.03,.07,.21,-.73,.02,0,-.79,-.21,-.14,.33,-.09,.78,.41,-.09,.5,.17,-.01,.04,.88,.51,-.06,.27,-.03,-.63,-.11,.81,.06,-.15,-.21,.68,-.09,-.06,.3,-.1,.11,.51,.71,-.26,-.16,.91,-.16,-.48,-.11,.03,.36,-.08,-.05,.23,-.14,-.1,.86,0,.75,.83,-.06,-.16,-.03,-.05,.67,-.23,.78,-.07,-.06,.02,-.09,-.06,.1,-.08,-.24,.63,-.11,.62,.13,.24,.24,.22,.49,-.2,-.11,.85,-.06,-.06,-.08,-.26,.72,.01,-.01,.01,.19,.88,-.04,.09,.07,.69,.51,.01,.1,.09,.09,-.29,-.15,.05,.17,.6,.74,.8,.65,.1,-.04,-.23,.26,.6,.92,-.03,-.48,.52,.03,.22,.21,-.05,-.15,.72,-.11,.81,-.03,.39,-.1,.05,-.02,-.15,.52,.38,.3,.82,.55,.92,-.11,-.12,.18,.15,-.15,-.05,.65,.63,.21,.01,.63,.2,-.07,.1,.26,.7,-.12,-.14,.19,-.22,.08,.15,.2,-.06,-.03,-.03,.36,.25,.88,.03,.16,.35,.02,.65,.14,-.08,.32,.87,-.04,.45,-.07,.8,.19,.58,-.07,-.48,.85,.63,.73,-.01,.13,.18,.68,.2,.08,-.13,.39,-.52,.19,.68,0,.87,-.07,-.06,-.09,.23,.87,-.15,.04,.57,.33,-.42,0,.16,.02,.85,-.21,-.18,.01,.55,.02,.53,-.03,.33,.85,-.07,-.11,-.06,.23,.15,-.09,-.04,.6,.24,.83,-.13,.63,.87,-.12,.17,.88,-.22,.11,.21,-.53,.57,.31,.17,-.24,-.03,-.04,.39,-.07,-.22,.46,.58,-.26,-.06,.86,.71,.04,.16,.52,.18,.78,-.37,.12,.17,-.5,.45,.34,.07,.62,.68,.48,.16,.14,0,-.09,-.65,.07,.91,.28,.16,.29,-.3,.29,-.14,.22,.14,.3,.78,0,.05,.1,.01,.17,.15,-.04,.41,-.1,-.04,.76,.86,.66,.01,.13,.03,.03,.85,-.37,-.2,-.2,.12,-.15,.08,.63,.48,.11,.1,.63,.66,.67,.61,.6,-.51,-.27,.65,-.01,0,.85,.75,.09,-.24,0,.85,.04,0,.32,.91,.87,.06,.22,-.4,-.14,-.19,.64,.05,-.11,.75,-.31,.91,.92,.57,.66,.79,.78,.03,.1,.37,.85,.88,.02,-.44,.3,.37,-.92,.03,-.11,-.02,-.05,.9,-.04,.57,.7,.81,-.72,.21,.01,.06,-.39,-.04,-.61,.76,.09,.9,.47,.05,.06,.84,.61,.02,.78,-.13,.69,.75,.72,.31,.1,.08,.4,-.3,.6,.49,.01,-.06,-.21,-.28,.77,.95,-.14,-.05,.6,-.19,.14,-.18,.56,.55,.8,-.16,0,.69,.85,.29,.78,-.03,.82,.18,.13,.01,-.01,-.04,.15,.81,-.01,.81,.02,-.05,.42,-.08,.26,.23,.04,.73,.06,-.15,-.15,-.2,-.09,-.01,.1,.45,-.25,.11,.06,.04,-.05,.11,.02,-.16,.06,.13,.57,.11,-.08,.92,.8,.57,.69,-.1,-.39,-.09,-.27,-.08,.63,-.01,.26,-.12,-.03,-.22,-.16,.03,.05,0,.61,.65,.13,-.35,.82,.83,-.12,-.37,.16,.29,0,.12,.75,.11,.42,.77,.88,.62,.02,.84,-.14,.07,-.05,.61,-.07,-.84,.72,.74,.27,.15,.65,.85,.76,.05,.65,-.2,.01,-.16,.13,.02,.12,.79,-.05,.04,-.15,-.1,.86,-.22,.05,-.03,-.11,-.06,.14,-.11,0,-.25,.25,.06,.76,-.28,-.07,-.34,-.27,.08,.36,.29,.84,-.15,-.24,-.17,.04,.86,-.35,.03,.18,.82,-.25,.85,.18,.39,-.15,-.84,.07,.88,.84,.05,.48,-.06,-.11,.04,.85,.59,.91,-.02,.22,.04,.07,.08,.73,.81,.44,.06,-.14,-.17,.34,-.34,.7,.86,-.43,.14,-.08,-.2,.63,.78,-.08,.23,-.53,.87,.9,-.24,-.15,-.18,-.13,-.08,-.13,-.26,.28,.13,.53,-.57,.85,.07,.42,.74,-.01,0,-.23,.48,-.11,-.17,.86,-.12,.14,.03,-.16,-.12,.09,.08,-.19,-.11,.02,.7,.81,-.02,.82,.66,-.31,-.24,-.32,.59,-.59,.18,.85,.02,.39,-.06,.88,-.12,.12,-.1,.59,.55,-.33,.07,-.01,-.51,.45,.82,-.01,.46,-.22,.09,-.17,.36,.73,.16,0,.37,.69,-.06,.27,-.2,.87,.14,.45,.62,.77,-.15,-.02,.09,-.19,.02,.83,-.03,.09,-.45,.12,-.04,.88,.07,.76,-.05,-.07,.85,.58,.61,.39,.16,.1,-.12,-.23,0,.5,.51,.95,-.19,.83,.76,-.36,.35,.02,.26,-.32,.79,.62,.61,.3,-.24,.04,-.03,0,-.17,.85,-.19,.63,-.03,-.64,.09,.15,.93,-.02,.23,-.12,.75,0,.91,-.12,.11,-.01,-.14,0,.92,-.06,-.21,-.01,-.06,-.16,.08,.11,-.2,.51,.85,.07,-.1,-.23,.69,.12,-.09,.5,-.01,-.01,-.07,.49,-.05,.02,.2,.01,-.05,.14,0,.62,.88,-.02,-.35,-.21,-.14,-.37,.03,.17,-.22,-.26,.14,-.05,.08,-.11,-.01,.24,.08,-.11,.02,-.13,.54,.26,.85,.8,.03,.05,.42,.84,-.12,.86,-.6,-.53,.28,.73,.03,-.5,-.16,.43,.88,.26,-.11,.09,0,-.11,.72,.14,.01,.02,-.1,-.17,.05,-.01,-.22,.56,.41,-.12,-.06,-.21,.03,-.13,-.03,-.34,.47,.85,.79,-.1,.85,.75,.01,.04,.67,.78,.88,.79,-.78,.22,0,.44,.89,-.04,.09,.01,.74,.1,.06,-.02,.78,.11,.18,-.09,-.05,.09,-.04,.03,.35,.93,.05,.85,.09,.88,.09,-.08,-.06,.67,.14,.05,.07,-.56,-.16,.06,-.27,.55,-.7,.8,-.12,-.08,.08,.15,.69,.87,-.15,-.21,.08,.07,-.07,-.4,.08,-.03,.08,.43,-.23,.09,-.2,-.17,.04,.09,-.04,.14,.11,-.04,0,.08,-.06,.16,.15,-.17,.21,-.12,-.07,-.06,.49,.09,.04,-.12,-.24,.37,-.4,-.26,.15,.8,.02,.44,.4,.12,.17,.81,.13,.08,.01,-.14,-.02,.27,.21,-.02,.49,.89,-.09,.48,-.01,-.11,.87,-.09,-.08,-.12,.06,.08,-.27,-.12,.46,-.1,.55,.26,-.03,.48,-.27,-.31,.03,-.09,.88,.02,-.08,.06,.8,.05,.28,-.16,.32,.65,-.13,.24,.11,.25,.77,-.01,.6,.75,-.14,.58,.88,0,-.14,.04,-.05,.16,.25,.11,-.2,-.17,.77,.1,-.3,.74,-.14,.43,.69,-.12,.14,.88,.87,-.26,-.24,-.38,.37,.81,.46,.69,.12,.71,.02,-.07,.28,.26,-.02,-.02,-.1,-.2,.8,.11,1,-.19,.71,-.23,.05,-.25,.02,-.12,.53,-.06,-.17,-.12,.84,.87,-.21,.05,.83,.89,-.11,.01,-.22,.94,.03,.07,.42,.84,-.07,.9,.34,.56,-.14,.06,-.26,.12,.72,.15,.03,-.06,.01,.02,-.1,.63,.47,-.18,.12,.83,.39,.86,.74,.64,.5,-.14,.08,-.74,.18,.52,.21,.86,.12,.59,.03,-.16,-.16,.04,-.31,-.31,.01,.91,.87,.14,.59,.09,-.21,-.47,.12,.88,-.06,-.23,.73,.75,-.33,0,.49,-.15,.83,.2,.72,-.21,.63,.43,-.09,.77,.07,-.25,-.3,.59,.07,-.05,.86,.56,.04,-.07,.81,.39,-.07,-.04,.05,.02,-.07,.13,-.08,-.08,-.4,.76,.15,.8,.59,.63,.04,-.1,-.07,.87,.9,.74,-.06,-.04,-.11,-.1,.29,.79,.01,.87,-.19,-.11,-.01,.11,.04,.42,-.27,-.17,.69,-.76,.87,.02,-.22,.08,.1,-.26,-.17,.19,-.08,.77,-.06,.74,.29,.21,-.29,.57,-.37,-.15,-.09,.64,-.09,.49,-.01,.32,-.09,.86,.11,-.06,.04,-.25,.82,.84,.56,-.3,.11,-.04,.68,.64,.51,.89,.47,.03,.11,.13,.68,.17,-.14,.92,-.11,.24,.84,-.78,.36,-.02,.06,.16,.51,.89,0,.25,-.06,-.2,-.31,-.06,-.03,.62,.83,.41,-.11,.02,.81,-.34,.43,.01,.23,-.33,-.03,-.02,.74,.29,-.2,-.2,.63,.14,.05,.11,.54,-.11,-.16,.25,.08,.39,.44,.17,.16,.05,.24,-.11,-.04,.42,.59,.01,-.19,-.42,-.08,.6,.2,.05,-.29,-.39,0,.11,.57,.18,-.22,-.32,-.4,.22,-.44,-.01,-.27,-.16,.04,-.06,.21,.2,.02,.45,.64,-.02,.42,.2,.38,.9,.29,-.15,.15,.85,-.25,-.04,-.03,.1,.66,.46,.6,.22,.26,-.31,-.16,.76,.76,.09,.06,-.01,.81,0,-.1,.16,-.02,.46,.12,.04,.21,-.04,.15,.73,-.07,-.04,.87,-.12,.11,.78,.15,.83,.84,0,-.31,.23,.11,.21,.64,-.28,.83,-.02,-.22,-.1,-.18,.07,.34,-.46,-.2,.11,.67,.86,.7,.75,.01,.04,.06,-.14,-.02,.26,-.14,.31,.63,.3,-.05,.17,.3,.12,-.22,-.52,-.07,.6,-.26,.67,.42,.39,-.11,.08,.34,-.08,.4,-.22,.54,.33,-.14,-.07,.34,-.33,.67,.35,-.05,-.06,.5,.09,-.01,.14,.47,.07,.22,.84,.24,-.31,.4,.88,.31,-.04,.57,.55,.36,.16,.28,-.06,.26,.85,-.19,.42,.55,-.04,.07,.41,.23,-.06,.33,.89,-.1,.25,-.11,-.11,.63,.09,.44,.59,-.07,-.01,.74,.5,.86,.85,.05,.61,.71,.75,.5,-.19,0,.72,.01,.75,.2,.77,.55,-.03,.05,.81,.37,.72,.63,.1,-.24,.53,.54,.34,.04,.63,.17,.64,.04,.78,.63,.6,.83,-.02,.66,-.09,-.13,.46,.64,-.27,-.04,.66,.6,.53,.23,.3,.48,.71,.8,.82,.05,-.08,.07,.22,.03,.81,.04,.08,.76,.26,.49,.5,.22,.75,.7,-.21,.1,.62,.28,.4,.7,-.18,0,.7,.39,.29,.72,.23,.78,.11,.82,-.25,.39,0,-.08,.1,.14,0,.46,.69,.19,.44,.16,.31,.03,-.04,.67,.73,.74,.72,.87,-.07,.11,-.15,.18,.21,-.01,-.08,.79,.44,.82,.04,.49,-.1,-.04,.21,.01,.53,-.21,.04,.88,.86,.75,.81,-.11,.63,.38,.53,.32,-.54,.58,.37,-.39,.73,-.16,.59,-.08,.65,.64,.06,.91,-.13,.13,.47,.08,.17,.49,.25,-.12,.03,.02,.17,.03,-.04,.83,.85,.57,-.18,.79,.57,.59,.81,.79,.93,.15,-.19,.08,.81,.01,-.35,-.21,.12,.14,.07,.87,.65,.43,-.13,.79,.31,-.11,.45,.14,.77,.54,.31,-.38,-.01,-.02,-.05,0,.18,.62,.62,.45,-.23,.41,.19,.9,-.05,.13,-.22,.07,.68,-.16,.64,.59,.79,.76,-.01,.47,.48,.82,-.17,.18,-.13,.62,-.61,-.14,.06,-.66,-.04,-.32,-.08,-.03,-.28,.01,.51,.5,-.14,.87,.84,-.17,.59,-.34,-.25,-.4,.03,.86,.87,.92,.57,.18,.39,.47,.45,.46,.61,.25,.86,.89,.55,.48,.31,.38,-.07,.44,.83,.72,-.07,-.01,.1,.04,.87,.18,.4,-.09,.53,.87,.76,.63,.82,.9,.71,.02,.54,-.08,-.28,.67,-.01,-.11,0,.75,.82,.71,.42,.06,.6,.24,.68,.09,-.08,.06,-.02,-.05,-.1,.64,-.35,.04,-.18,.91,-.15,.75,-.23,-.13,.15,.03,-.21,-.15,.9,-.11,-.01,.38,.07,.32,.8,-.3,-.39,-.29,.02,.78,-.12,-.15,.59,.43,.29,-.15,.85,.01,.87,.11,.91,0,.32,.25,.04,.43,.22,.26,-.15,-.78,-.21,-.13,.64,.72,.82,.44,-.25,.13,.82,.29,.36,.05,-.06,-.12,.88,.79,.03,.47,.85,.42,.23,.08,.8,.88,-.06,-.1,.25,.38,.44,.1,-.25,.45,.45,0,0,.86,-.3,-.01,.79,.05,-.05,.58,.09,-.04,-.14,.78,-.49,.66,-.07,.08,-.23,-.06,.57,.47,-.17,-.06,.06,-.05,.87,.91,.58,.07,.59,.75,.92,.81,.92,.03,.02,.36,.88,.02,.27,-.09,-.15,.03,.86,.87,-.26,.69,-.1,.22,.8,.19,.28,-.01,.09,-.34,-.2,.09,.14,.68,.82,.53,.8,.32,.02,.41,.1,.33,-.02,0,.14,.68,.9,.07,-.19,-.74,.29,.75,.34,.71,.17,.94,.14,-.03,.73,-.79,.89,.85,.91,.16,.71,.13,.71,.62,.09,.63,.64,.84,.31,.9,.9,.73,.07,.91,.4,.26,-.1,.91,.9,.84,.9,.84,-.28,.73,.67,.22,-.66,.94,-.04,.84,-.48,.06,.69,.39,.86,.78,-.11,.03,.11,-.21,.78,.05,.72,.45,.8,-.07,-.11,.04,-.13,.08,.06,.46,-.01,.18,.92,-.01,.14,.44];export{a as rvalData};
