const a=[-.42,.46,.64,-.06,.85,-.01,.31,0,.45,.24,.46,-.05,.01,-.69,.6,0,.28,.13,-.12,.05,-.07,-.32,.05,.46,.71,.94,-.31,.05,.39,-.22,.54,-.4,.79,.12,.05,.17,.76,.58,.39,.55,-.03,.93,.48,-.05,.13,.41,.19,-.16,.08,.25,.28,-.02,.24,.81,.33,.45,.46,.09,.34,.81,.36,.78,.83,-.07,.27,-.21,.92,.57,-.03,.03,-.12,.56,.36,-.25,.89,-.02,-.1,.34,.43,-.08,-.51,.75,-.04,.91,-.23,-.28,.88,.11,-.82,.6,.06,.13,.27,-.68,.03,.04,-.77,-.25,-.16,.45,-.1,.84,.47,-.12,.55,.13,.01,.09,.8,.57,-.07,.32,.01,-.6,-.19,.82,.11,-.23,-.32,.72,.02,-.09,.22,-.11,-.02,.55,.73,-.26,-.2,.86,-.14,-.49,-.08,.06,.3,.06,-.01,.29,-.23,-.05,.86,.08,.85,.88,0,-.15,-.06,-.04,.74,-.16,.83,-.01,.04,-.01,-.01,.03,.14,-.07,-.27,.57,-.16,.67,.04,.24,.31,.31,.43,-.29,-.08,.84,-.02,-.19,-.08,-.26,.6,-.15,.01,-.05,.27,.82,-.01,.1,.03,.61,.51,.01,0,.03,.1,-.25,-.13,.11,.14,.68,.72,.7,.65,.21,0,-.35,.38,.64,.87,.04,-.52,.43,-.07,.27,.22,-.02,-.11,.68,-.17,.81,.09,.37,-.01,.08,-.15,-.17,.5,.43,.39,.8,.55,.88,-.07,-.23,.19,.14,-.1,-.11,.7,.57,.2,.05,.6,.23,.01,.06,.32,.69,-.04,-.11,.24,-.19,.09,.12,.13,-.12,.03,-.09,.35,.21,.86,0,.03,.44,.06,.61,.11,.02,.39,.85,-.06,.52,-.19,.87,.13,.71,-.11,-.36,.8,.58,.71,.06,.06,.27,.64,.06,.13,-.2,.45,-.46,.23,.57,-.09,.8,.05,-.18,-.11,.27,.78,-.11,.08,.5,.28,-.38,.02,.12,-.01,.76,-.24,-.09,.06,.54,-.1,.6,.05,.25,.91,-.1,-.11,0,.17,.1,.02,.06,.55,.18,.91,-.13,.61,.88,-.05,.25,.79,-.18,-.02,.29,-.55,.58,.25,.14,-.35,.01,-.14,.38,-.16,-.36,.5,.49,-.27,.01,.81,.63,.08,.21,.42,.22,.79,-.3,.11,.23,-.39,.49,.26,-.09,.63,.64,.61,.15,.17,.03,-.15,-.57,.15,.86,.33,.11,.18,-.26,.41,-.08,.27,.25,.34,.83,.02,.14,.07,.01,.07,.12,-.03,.35,-.19,-.04,.64,.74,.62,0,.09,-.13,-.13,.76,-.43,-.14,-.16,0,-.2,.16,.6,.54,.19,.06,.64,.62,.73,.6,.56,-.47,-.27,.64,-.02,0,.88,.64,.14,-.23,.03,.82,-.05,-.03,.45,.86,.74,.01,.24,-.37,-.1,-.13,.7,-.02,-.06,.81,-.28,.81,.88,.58,.7,.9,.87,.13,.19,.42,.74,.79,.19,-.48,.3,.45,-.91,.08,-.09,-.04,-.17,.84,.08,.56,.73,.69,-.7,.34,-.16,.05,-.37,-.12,-.66,.76,.11,.83,.4,.08,.14,.73,.51,.11,.68,-.22,.67,.75,.7,.38,.19,.08,.33,-.33,.42,.43,.05,-.05,-.12,-.34,.7,.92,-.05,0,.55,-.16,.21,-.11,.6,.59,.91,-.17,.01,.58,.7,.35,.82,.08,.9,.12,.2,-.13,-.01,.04,.28,.85,-.12,.73,-.03,-.1,.49,-.06,.12,.26,.09,.64,.11,-.07,-.19,-.16,-.03,.03,.13,.29,-.22,.08,.04,.12,-.07,.02,-.07,-.17,.03,.02,.61,.23,-.13,.87,.72,.5,.73,-.1,-.45,-.11,-.26,-.09,.61,-.11,.32,-.07,0,-.13,-.1,.03,.03,-.08,.54,.63,.23,-.31,.84,.75,-.07,-.53,.2,.29,-.1,.1,.78,.18,.47,.75,.76,.72,-.07,.74,-.05,.01,0,.64,-.02,-.81,.62,.71,.38,.03,.55,.9,.71,.18,.55,-.27,.04,-.23,.1,.17,.07,.69,-.05,.1,-.13,.03,.78,-.18,.01,-.01,-.08,-.1,.11,-.08,.05,-.3,.34,.12,.79,-.25,-.07,-.42,-.32,.19,.2,.41,.72,-.09,-.19,-.29,.13,.84,-.45,-.02,.23,.85,-.22,.86,.09,.44,-.14,-.87,.04,.82,.72,-.02,.51,.01,-.07,.11,.76,.52,.88,.08,.27,.06,.13,.15,.82,.89,.54,-.04,-.09,-.26,.38,-.31,.75,.89,-.53,.17,-.02,-.16,.52,.75,.05,.2,-.49,.93,.85,-.2,-.14,-.21,-.08,-.08,-.06,-.19,.25,.17,.59,-.56,.91,.13,.49,.69,-.09,.02,-.18,.4,-.14,-.26,.85,-.14,.09,-.03,-.16,-.07,.16,.07,-.14,-.1,.1,.69,.71,-.04,.79,.53,-.33,-.35,-.31,.61,-.63,.17,.74,-.07,.41,-.03,.8,-.09,.05,-.06,.51,.38,-.46,-.02,.03,-.5,.53,.71,.1,.53,-.22,-.07,-.22,.4,.73,.07,-.1,.38,.58,-.02,.27,-.28,.78,.22,.46,.65,.79,-.12,-.01,.2,-.16,.05,.84,.03,.16,-.36,.14,0,.82,.21,.65,-.14,-.15,.89,.51,.62,.38,.24,-.05,-.21,-.32,-.01,.5,.48,.9,-.25,.75,.87,-.27,.36,.08,.3,-.32,.8,.55,.64,.34,-.29,.13,.04,-.08,-.24,.73,-.28,.69,.03,-.6,0,.17,.86,-.03,.35,-.09,.73,.05,.87,-.14,.07,-.12,-.11,.02,.87,.03,-.19,.01,-.12,-.08,.04,.18,-.33,.42,.81,.05,-.06,-.26,.71,.15,-.19,.52,-.05,-.01,-.19,.56,-.13,0,.22,.11,.06,.19,-.14,.71,.86,-.11,-.39,-.14,-.09,-.41,.03,.23,-.18,-.22,.11,.1,.15,-.02,.09,.3,.11,-.14,.07,-.2,.44,.19,.9,.77,.06,.13,.43,.78,-.08,.89,-.52,-.48,.37,.75,-.02,-.48,-.16,.45,.88,.11,-.11,-.02,.06,-.07,.63,.21,.04,.05,-.07,-.07,-.02,-.14,-.24,.65,.35,-.09,-.06,-.18,-.06,-.04,-.03,-.39,.59,.79,.77,-.05,.79,.75,.14,.09,.57,.74,.9,.87,-.74,.33,-.05,.52,.91,-.01,-.01,.03,.81,.06,.03,.03,.68,.05,.2,-.03,.01,.14,-.12,.02,.43,.93,.01,.91,-.06,.8,.11,-.02,-.09,.69,.16,.01,-.11,-.61,-.08,-.01,-.24,.49,-.66,.83,-.04,-.03,.1,.2,.59,.89,-.15,-.29,.13,.01,-.05,-.32,.07,-.03,.24,.5,-.21,.14,-.17,-.07,.09,.07,-.02,.12,.04,.03,.01,.06,-.15,.08,.14,-.12,.16,-.14,-.07,0,.53,.12,-.03,-.07,-.21,.38,-.34,-.2,.08,.92,-.03,.39,.4,.1,.17,.71,.06,.09,.01,-.1,-.08,.13,.26,.03,.53,.85,-.04,.44,.04,-.17,.79,-.09,-.01,-.09,.14,.09,-.27,-.22,.51,-.03,.46,.29,-.12,.51,-.19,-.36,.08,-.04,.8,-.09,-.07,-.09,.81,.23,.26,-.25,.44,.55,-.04,.25,.28,.37,.66,-.09,.48,.69,-.13,.64,.91,.07,-.31,.03,.03,.26,.16,.15,-.18,-.29,.84,.13,-.25,.74,-.31,.4,.76,-.09,.21,.83,.78,-.21,-.28,-.3,.53,.69,.49,.57,.09,.6,-.07,-.07,.31,.35,0,-.13,-.13,-.17,.79,.16,.89,-.22,.67,-.23,.04,-.33,.04,-.12,.53,.07,-.15,-.11,.75,.83,-.19,.1,.81,.83,-.08,.08,-.18,.9,-.05,.04,.44,.88,-.01,.83,.26,.5,-.13,.05,-.26,.25,.63,.15,.09,0,.04,.08,-.02,.65,.48,-.11,.22,.72,.28,.85,.71,.65,.52,-.1,.05,-.64,.23,.58,.14,.78,.1,.69,.07,-.11,-.15,.06,-.24,-.31,.1,.85,.8,.19,.52,.21,-.27,-.48,.05,.82,-.07,-.3,.75,.76,-.33,-.09,.53,-.17,.8,.24,.76,-.19,.57,.5,-.05,.69,.06,-.24,-.26,.59,.15,.05,.91,.62,0,-.1,.9,.38,-.01,0,.13,-.01,-.13,.24,.04,-.14,-.35,.7,.15,.77,.57,.73,.02,-.06,-.01,.8,.91,.63,-.04,.02,-.15,-.08,.21,.71,.04,.85,-.19,-.01,.07,.08,.21,.5,-.3,-.12,.66,-.77,.75,.2,-.19,-.02,.26,-.32,-.28,.33,-.05,.76,-.02,.76,.3,.13,-.25,.43,-.4,-.11,-.14,.68,-.06,.48,.08,.36,-.02,.75,.16,-.01,.08,-.2,.89,.89,.6,-.32,.15,-.13,.64,.69,.58,.8,.54,.18,.19,.19,.6,.29,-.1,.88,-.15,.33,.73,-.75,.34,.02,.03,.2,.5,.84,.09,.26,.02,-.15,-.33,-.02,0,.58,.88,.4,-.18,.02,.74,-.37,.44,.16,.27,-.31,-.01,.07,.71,.35,-.18,-.01,.57,.03,.05,.09,.57,-.11,-.2,.27,.12,.44,.53,.18,.19,.14,.31,-.18,-.01,.38,.64,-.03,-.24,-.39,-.12,.65,.23,-.06,-.29,-.53,-.08,.09,.56,.2,-.37,-.4,-.47,.24,-.49,.06,-.34,-.23,-.02,-.14,.15,.16,.08,.51,.71,-.03,.35,.28,.46,.85,.17,-.1,.24,.77,-.32,-.02,-.09,.08,.62,.54,.57,.23,.32,-.28,-.14,.67,.72,.16,.08,-.04,.76,.03,-.14,.14,-.06,.4,.02,-.04,.22,-.07,.18,.62,-.03,-.05,.83,-.14,.09,.83,.29,.91,.88,.02,-.3,.29,.05,.32,.53,-.31,.92,.04,-.2,-.04,-.17,.07,.19,-.44,-.25,.11,.72,.92,.74,.6,.12,-.13,-.01,-.15,.06,.28,-.21,.33,.7,.27,-.03,.13,.23,.21,-.24,-.55,-.18,.64,-.34,.69,.36,.46,-.08,.07,.3,.01,.45,-.2,.59,.4,-.24,-.04,.43,-.34,.65,.32,.03,-.05,.61,.11,0,.08,.5,-.06,.12,.87,.3,-.29,.31,.84,.36,.09,.57,.66,.44,.18,.32,-.08,.25,.91,-.24,.45,.52,.09,.19,.38,.2,-.02,.36,.86,-.03,.2,-.2,-.01,.63,.17,.44,.64,-.03,.13,.62,.54,.77,.74,.14,.59,.75,.69,.5,-.14,.13,.72,-.02,.78,.19,.81,.61,.01,.2,.81,.39,.67,.66,.14,-.23,.57,.72,.42,.07,.62,.28,.6,.04,.71,.61,.65,.83,.04,.54,.02,-.19,.53,.62,-.29,.05,.66,.57,.58,.3,.24,.59,.64,.79,.88,-.04,-.15,.12,.39,.07,.71,.1,.18,.74,.1,.56,.54,.26,.73,.65,-.14,.1,.53,.35,.45,.6,-.15,.15,.75,.29,.41,.76,.26,.8,.06,.84,-.19,.43,.16,0,-.04,.1,.09,.52,.63,.18,.52,.08,.36,-.14,.02,.69,.7,.71,.7,.92,.02,.26,-.05,.17,.29,-.01,-.14,.84,.51,.88,.08,.53,-.02,-.06,.31,.07,.58,-.13,.07,.81,.75,.67,.72,-.05,.58,.32,.59,.35,-.48,.66,.36,-.38,.77,-.09,.63,-.02,.6,.63,-.02,.91,-.09,.16,.36,.17,.19,.51,.22,-.07,0,.12,.09,-.09,.04,.82,.75,.54,-.19,.8,.52,.57,.81,.84,.87,0,-.14,.1,.86,-.1,-.34,-.14,.2,.22,.09,.78,.61,.4,-.13,.82,.4,-.1,.53,.05,.81,.53,.35,-.32,-.15,.04,-.14,.04,.2,.57,.68,.39,-.2,.47,.21,.81,-.02,.12,-.23,.08,.66,-.25,.59,.55,.69,.68,-.02,.55,.41,.84,-.22,.2,-.04,.6,-.59,-.19,.12,-.57,-.07,-.25,-.02,-.01,-.22,.07,.55,.51,-.12,.88,.73,-.07,.52,-.33,-.31,-.39,.07,.81,.78,.92,.59,.12,.46,.46,.51,.49,.64,.32,.86,.77,.63,.58,.36,.46,-.18,.55,.83,.7,.07,-.13,.12,.1,.91,.03,.45,-.07,.58,.77,.84,.55,.76,.83,.71,.02,.57,-.02,-.19,.61,-.02,-.11,.01,.65,.73,.7,.38,.17,.51,.29,.62,.14,-.07,.11,0,.02,-.06,.53,-.37,.03,-.25,.81,-.13,.71,-.33,-.12,.16,.03,-.17,-.16,.82,-.03,.01,.44,.2,.37,.89,-.36,-.42,-.32,.02,.78,-.11,-.1,.63,.46,.19,-.23,.89,.06,.89,-.05,.86,0,.38,.32,0,.38,.21,.21,-.09,-.74,-.19,-.18,.68,.73,.77,.4,-.24,.08,.87,.31,.48,.1,-.04,-.18,.9,.71,.01,.52,.89,.44,.31,.05,.79,.93,-.11,-.09,.3,.42,.45,.13,-.29,.51,.39,-.03,-.12,.76,-.27,-.01,.88,.05,-.07,.68,.07,.03,-.16,.83,-.54,.59,.07,.03,-.16,-.02,.53,.32,-.1,-.09,.18,-.02,.79,.87,.53,-.04,.51,.68,.88,.86,.84,.04,.06,.43,.94,.04,.15,-.06,-.09,.14,.89,.87,-.29,.79,-.15,.14,.71,.19,.27,-.02,.02,-.38,-.19,.09,.13,.7,.76,.69,.73,.42,.03,.44,.09,.26,-.11,0,.03,.72,.86,.16,-.28,-.81,.27,.62,.3,.69,.24,.93,.25,-.01,.7,-.82,1,.8,.86,.17,.79,.05,.73,.68,.13,.66,.55,.88,.34,.83,.95,.67,-.02,.84,.36,.39,-.09,.87,.95,.92,.86,.9,-.29,.77,.55,.09,-.61,.9,.02,.73,-.5,0,.75,.44,.91,.84,-.18,0,.01,-.12,.75,.09,.59,.45,.81,-.08,-.16,.05,-.19,-.04,.1,.5,0,.04,.85,.06,.18,.53];export{a as rvalData};
