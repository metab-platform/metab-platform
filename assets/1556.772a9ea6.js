const a=[.76,.65,.22,.9,.01,.22,.08,.03,.22,.05,0,.33,.99,.06,.01,.52,.35,.9,.48,.66,.95,0,.14,0,.1,.11,0,0,.03,0,.05,0,.56,.06,0,.66,.57,0,0,.27,.08,.02,0,.5,.53,0,.14,.18,0,0,.25,.36,.18,.38,0,.02,.1,0,0,.45,0,.02,0,.94,.16,0,0,0,.73,.75,.59,.53,0,.24,.05,.23,0,0,.82,.06,.05,.7,.36,.03,.48,0,.09,.38,.06,.28,0,.07,.02,.37,.62,.03,.01,.01,.23,0,.74,0,0,.34,0,.33,0,.01,.54,0,.51,0,.08,.68,.66,.7,.84,0,.05,.49,.6,.01,.14,.51,.36,0,.02,.83,.01,.69,0,.03,.49,0,.27,.64,0,.02,0,.79,0,.5,0,.05,.46,.75,.98,0,0,.24,.01,.08,.82,.74,0,0,.17,.54,.31,0,0,0,.04,.03,.02,0,.57,0,0,.7,.57,0,0,0,.24,0,.89,0,0,.85,.03,.76,.49,.67,0,.23,.13,.25,0,.54,.48,0,.29,0,0,.48,0,0,.77,0,.29,.02,.99,.5,.11,0,.2,0,0,.86,0,0,.93,.33,0,.29,.24,0,0,0,0,0,0,.29,0,.99,0,0,0,.02,.48,.71,.68,.13,.8,.32,.01,0,0,.53,0,0,0,0,.02,.02,.48,.6,.73,.62,0,.02,0,.5,0,.05,.61,.9,.01,.75,.69,0,.09,0,0,0,.01,0,.06,.6,.13,.52,.73,.07,.72,.41,0,0,.02,0,0,0,.01,.36,0,.62,0,.25,0,0,.52,0,.17,.05,.01,0,.01,.4,.22,0,.85,.31,.01,.63,.42,.19,.73,0,0,0,.01,.96,.06,.72,.02,0,0,0,.03,.03,0,.21,.02,.01,0,0,.06,0,.38,0,0,0,.71,.48,0,.17,0,0,.16,0,0,.01,.17,.79,.68,.05,.18,0,0,0,0,0,.43,0,.47,.03,.03,.12,0,.6,.24,.83,0,0,.76,.03,.03,.76,0,.83,0,.81,.19,.02,0,0,.01,.01,.24,0,.45,.84,.23,.39,.93,.82,.3,.99,.24,.13,.01,.83,.54,.19,.03,.2,0,.58,0,.52,.48,0,.01,.82,0,.81,.17,0,0,0,.04,.02,.06,0,0,.83,0,.87,0,.01,.32,.6,0,.26,.1,.85,.9,.1,0,0,0,.06,.58,.75,0,.43,.59,.02,.07,0,0,.02,0,.05,0,0,.85,.04,.18,0,.03,0,.07,0,.18,.01,0,.6,0,.85,.01,.01,.16,0,.94,.52,.58,.87,.14,.53,0,.71,.45,.35,0,.8,.1,.34,.52,0,0,.17,.03,.06,0,0,0,.22,.17,.09,.87,.57,.59,.01,0,.81,0,.12,.82,0,0,0,0,.71,.01,.31,0,.39,.78,0,0,0,0,.32,0,0,0,0,0,.1,.42,.02,.15,.69,0,.86,.61,.05,.83,.01,0,0,.34,0,.2,.2,0,.43,0,.99,.47,0,.58,0,.01,.76,.11,0,0,0,0,.99,.1,.86,.04,.68,0,0,0,.51,.19,0,0,.13,.8,.87,.34,.24,0,.27,.02,.04,.09,.06,.07,.26,.39,0,0,.31,0,.18,0,0,0,.04,.49,0,0,.31,.78,.76,.47,0,.08,.64,.92,.21,0,.19,.8,.1,.02,0,.47,0,0,.6,.89,0,.44,.07,.02,0,.5,.9,.17,.01,.08,.27,.01,.23,0,.99,0,.99,0,0,0,.16,.97,0,.04,0,.49,0,.79,0,.05,0,0,.31,0,.02,.14,0,0,.03,.11,0,.62,.04,0,.11,.84,.63,.01,.11,.42,.88,.2,0,.38,0,.07,.09,.52,0,.04,.1,.8,.97,.31,0,0,0,0,.1,.15,.73,.96,0,.67,.62,0,.03,.21,.02,.14,.4,.79,.58,0,.26,.17,.69,.47,.34,0,.16,.02,.1,.01,.46,.17,.32,.37,.96,.97,0,.09,0,.03,.14,.66,.97,.83,.01,.1,.24,.07,0,.37,.65,.94,.55,.03,0,.45,0,.04,0,.14,.18,0,0,.36,.65,.01,.62,0,.4,0,0,.9,.12,.61,.06,0,0,.63,.01,.84,.02,.95,.82,.18,.48,.06,.99,.19,0,.77,0,.76,.83,0,.58,0,.3,0,0,.02,.21,0,.75,0,.19,.1,0,.88,.19,.38,0,.12,0,0,0,.77,0,0,0,0,0,.21,0,.11,0,.77,0,.45,.16,0,0,.41,.03,.02,.03,0,.45,.76,.69,.1,0,0,0,.1,0,.23,.53,.97,.35,.08,.86,.7,.96,.1,0,.06,.95,.01,1,0,.51,.14,0,.54,.02,.34,0,0,.51,.21,0,0,0,0,0,0,.01,.84,0,.59,.82,1,0,0,0,.01,.02,0,.26,.06,.28,0,0,.02,.34,0,0,.3,.6,.07,0,0,0,.02,.02,.74,.29,0,.57,.11,0,.23,.4,0,.32,0,.01,0,.68,.07,0,0,.62,.25,.56,.02,.47,.86,.25,.94,.33,.76,.87,.76,0,.57,0,.37,0,0,.03,0,.11,.16,0,0,.19,0,.48,.81,.26,0,.02,.1,.55,.09,0,0,.13,.62,.04,0,.13,0,.83,0,.01,.48,.18,0,.07,.07,0,.27,.93,.23,.25,0,.67,0,.45,0,.94,.02,0,0,.9,.72,.61,0,.88,0,.61,.41,.76,.02,.62,0,0,0,.01,.08,.11,.07,0,0,.11,.03,0,0,.01,.05,0,0,.72,.74,0,0,0,0,0,.74,0,.25,.78,.73,.26,.49,.9,.74,.53,.73,0,.88,.62,.2,.12,.06,0,0,0,.01,.16,.01,.17,0,.25,0,.03,.34,0,.75,0,.07,.77,.9,.09,0,.01,.27,0,.17,0,.69,.04,.83,.19,0,.56,0,.83,.7,0,.37,.76,.06,0,0,.09,.04,.01,.84,.45,.25,.02,0,.83,0,.66,.09,.09,0,0,0,.24,.13,.43,0,0,0,.63,.27,.34,.81,0,0,.23,.68,0,.63,.8,0,0,.37,.81,0,.05,.69,.02,0,0,.31,0,.1,0,.02,.03,.43,0,0,.56,.79,.38,.33,.81,.08,.54,.2,0,0,.47,0,0,.66,.04,0,.67,.02,0,.07,.97,.01,.65,.58,0,0,.89,0,.02,.15,.25,.35,.01,.25,0,.16,.05,.27,0,.25,.38,0,.46,.62,.71,.04,.29,.63,.74,0,.06,.27,0,.7,0,.02,.36,.25,.54,.61,0,.82,.73,.03,.98,.01,0,0,.77,.5,0,0,.68,.17,.72,.72,.55,0,.98,.25,0,.26,.45,.35,.25,.08,.63,.01,.55,.72,.19,.11,.69,.24,0,0,.09,0,.01,.85,.02,0,0,0,.09,.06,0,.08,.55,.05,0,.86,0,.01,.01,0,0,.12,.01,.81,.48,.55,0,.74,0,0,0,0,0,.04,.08,.05,.3,.73,.8,.53,.48,.27,.07,.77,.33,.47,.11,.59,.79,.02,.14,.07,.91,.25,0,.51,.19,0,.04,0,0,.02,.46,.27,0,0,0,0,0,0,.78,.78,.27,0,0,.04,0,.2,.84,.02,.84,0,.13,.4,0,.09,1,.18,.69,.49,.23,0,.05,0,0,0,0,.57,0,.06,0,.84,.06,.35,.99,.42,0,0,0,.94,.01,0,.39,.4,.04,.02,0,0,.51,.69,.43,.01,0,.76,.78,0,0,.77,0,0,0,.84,.01,0,0,0,.44,0,.26,.7,0,.01,.26,0,.02,.32,.37,.04,0,.34,.48,0,0,0,.07,.23,0,0,0,0,0,.09,0,.52,.07,0,0,0,0,.01,0,.02,.55,.15,.79,0,.76,.26,.02,0,.56,.06,.2,.01,.4,.03,.17,.91,.81,0,0,0,.02,0,0,.7,0,0,.32,.27,.03,0,.78,.03,.1,.01,0,.37,0,0,.37,0,.03,0,0,.19,.18,.03,.08,0,.51,.74,.51,0,.07,.1,.87,.72,.4,0,.26,.2,0,.01,0,.16,.06,.21,.82,0,.49,0,0,0,0,.96,0,.91,.43,.83,.65,.14,.05,.69,.52,.05,.06,.34,.02,.01,.63,.65,0,.81,0,0,0,.03,.72,.72,.11,0,.25,.14,0,0,.33,0,.03,0,.41,0,.67,.54,.01,0,.07,0,.46,.43,0,0,.01,0,0,0,0,.69,.65,.62,.32,.69,.81,.07,0,.28,0,.51,0,0,.1,.36,.15,.02,0,.84,.16,.07,.53,0,0,0,0,0,.1,0,.53,0,.94,.8,0,0,.04,0,.26,0,.54,0,.09,0,.14,.05,0,.01,0,.01,.48,0,0,.28,.42,0,.89,0,0,.92,0,0,.96,.01,0,.63,.64,.01,.23,0,0,.04,0,0,.28,.03,.01,.87,.01,.33,.28,0,0,0,0,0,.14,0,.03,0,0,0,.6,.02,.82,0,.01,0,0,.34,0,.91,0,.6,.14,0,.02,0,.02,.72,.17,.47,.26,.77,.04,0,.07,.65,.2,.12,.67,0,0,0,0,.83,.02,.37,0,.01,0,.9,.39,.91,.02,.44,.53,0,1,0,.76,0,0,.3,0,.19,.01,0,.32,0,0,.02,.87,.09,0,0,.07,0,.01,0,.48,0,0,0,0,.42,.57,.15,0,.03,0,.66,0,0,0,.02,0,0,0,0,.37,0,.28,.06,0,.95,.18,.23,.07,0,0,.02,.03,0,.09,.43,0,.1,.05,.82,.01,.16,0,0,0,0,.03,.56,.14,.25,.3,.24,0,.01,.98,0,.53,0,0,.01,.34,.07,.52,.52,.92,0,0,.45,0,0,.37,.04,.96,0,.36,.21,.01,0,.13,0,.02,0,0,0,.06,.59,.18,.64,.64,0,.37,.18,.72,.37,.1,.5,0,.98,.02,0,.76,.92,.92,.21,.63,.03,.01,.19,.09,.39,.76,.9,.53,0,0,.78,.78,.61,.8,.06,.13,0,0,.37,.06,.35,.03,.82,0,.01,.36,.01,0,0,.69,.06,.52,.02,0,0,0,.05,0,.13,0,0,0,0,0,.2,.76,0,.07,.12,1,0,.17,.66,.65,0,.43,0,.37,.43,.03,0,.47,0,.12,.77,0,.01,0,.13,0,.12,.06,.11,.24,.62,.47,.39,.04,0,.15,.1,.02,.81,.94,.46,0,0,.91,.19,.82,.57,.67,0,.14,0,0,0,.31,.01,.3,.8,.1,.65,0,0,0,.89,.7,.15,.01,.08,.37,.97,.02,0,0,.41,.39,.68,.1,.48,.19,.31,.17,0,.01,.01,.03,.72,0,0,0,0,.19,.41,.31,.13,.22,.17,.17,.01,.72,0,.21,0,.13,0,0,.05,0,0,.45,0,.21,0,.39,.03,.29,.69,.05,.01,0,.49,0,.01,.72,.64,0,.01,.01,0,.23,.05,.39,.3,.86,.88,.79,0,.79,.71,.05,.12,0,.81,.44,.52,.01,.07,.07,.14,0,.03,0,0,.44,.95,.39,.17,.09,.01,.54,.16,.67,.81,.01,.02,.17,.02,.01,.96,.01,.7,.04,.21,0,.12,0,.38,0,.87,.01,.61,.39,.02,.24,.34,0,.07,.02,0,.42,.44,0,0,.16,0,.08,.18,.14,.06,0,.12,.49,0,.17,0,.07,.01,.34,.24,.07,.15,.98,.04,.19,0,.97,0,0,0,.9,.12,.13,.61,.05,.01,0,.02,0,.32,.89,.25,.52,.05,.6,0,.02,.11,0,0,.29,0,0,.02,.01,.18,.05,.02,.01,0,.9,0,.03,.56,.88,.34,.32,.56,.06,.89,0];export{a as pvalData};
