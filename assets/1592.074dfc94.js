const a=[.48,.65,.08,.63,.25,0,.88,.41,.03,0,.01,.29,.73,.19,.03,.25,.78,.38,.88,.74,.25,0,.03,.02,.01,.71,0,.61,.28,0,.41,0,.83,.1,0,.78,.91,.2,.41,.91,.71,.93,.73,.82,.06,.09,.09,0,0,0,.15,.3,.1,.24,.12,.4,0,.32,.14,.4,0,.92,.01,.91,0,0,.73,.04,.05,.14,.12,.52,0,.62,.25,.61,.01,0,.02,0,.38,.07,.82,.44,.05,0,.13,.41,.24,.61,.02,.64,.33,.33,.06,.01,.9,.36,0,.01,.52,.07,.46,.78,.1,.62,.38,.14,.03,.05,.8,0,.65,.65,0,.43,.52,0,0,.08,.21,.07,.84,.23,.38,.02,.34,0,.11,.98,.08,.24,.63,0,.23,0,.01,.23,0,.44,.37,.33,.18,.16,.91,.93,.99,.01,.92,.54,.09,0,.67,.43,.1,.44,.04,.19,.37,.02,0,.05,.23,.05,.29,0,.61,0,.18,.3,.15,0,0,.2,.91,0,.45,0,0,.95,.01,.1,.2,.21,.17,.76,.53,.2,0,.23,.93,.01,.98,.42,.05,.76,.19,.05,.4,0,.02,.78,.88,.31,.02,.84,.09,0,.07,.26,0,.01,.72,.32,.42,.09,.73,.01,0,.01,.79,.33,.8,.68,.87,.71,0,0,.78,.33,.62,.8,.02,.02,.14,.37,.03,.53,.05,.72,0,.01,.82,.05,.08,.01,.98,.08,.46,.68,0,0,.06,0,.34,.3,.96,.98,.05,.06,.59,.13,.18,.32,.08,.16,.05,.45,.22,.94,0,.97,.83,0,.46,.81,0,0,.05,0,0,0,.21,.93,.83,.44,.01,.39,0,0,.84,0,.18,.02,.62,.71,.84,.37,.01,0,.26,.82,0,.01,.91,.43,0,0,.95,.97,.39,.61,.63,.99,.01,0,0,.01,0,0,.87,.07,.09,.73,0,.89,.12,.74,.01,.84,.13,.5,0,.63,0,.89,0,.84,.96,0,0,.86,.3,.47,.67,.16,.32,0,.52,.57,.14,0,.22,.89,.18,.16,.16,.52,.01,.08,.29,.07,.7,.04,.07,.87,.87,.55,.01,.48,0,.67,.56,.03,0,.1,.77,.56,.42,.05,.12,.39,.59,.06,.33,.34,.98,.51,.59,.44,0,.31,.58,.01,.03,.61,0,.19,.54,.3,.04,.01,.01,.34,0,.44,.1,.01,.07,.88,0,.43,.01,.01,.58,.98,.25,.03,0,0,.87,.82,0,.03,.15,.65,.47,.33,.21,.24,.61,.03,.05,.88,0,.05,.02,.49,.61,.22,.27,.92,.18,.21,0,.69,.99,.41,.55,.01,.66,0,.53,.01,.37,.02,0,.71,.78,.16,0,.79,.25,0,.19,0,.51,.45,.52,.15,.27,.82,.86,.76,.04,.05,.03,.01,.74,0,.14,.61,.66,.62,0,.01,.01,.07,0,.01,.31,.25,.21,.03,.08,.57,0,.39,.95,.35,.07,.18,.1,.29,.08,.6,.01,.04,.19,0,.18,.04,.08,.9,0,0,0,.18,0,.54,.19,.42,0,.44,.8,.23,.81,.03,.07,.68,0,0,.26,0,.29,.14,.64,.02,.36,.13,.69,.03,.81,0,0,.12,.87,0,0,.87,.01,.76,.05,.01,.07,.44,.02,.17,.53,.95,0,0,.2,.11,.18,.02,.53,.45,0,.9,0,.01,0,.13,.96,.24,.82,0,0,.11,0,.65,.07,.03,0,.03,.83,.03,0,.98,.09,.75,.49,.05,.09,.86,.51,.06,.54,.03,.82,.21,.15,.04,.07,0,.05,0,.57,.68,1,.35,.27,.01,.05,.19,.69,.01,.52,.31,.03,.79,.35,.76,.22,.1,.14,.52,.3,.01,.67,.33,.74,0,.27,0,.05,0,.15,0,.49,.34,0,.28,.32,.97,.41,.45,.09,0,.01,.27,.15,.73,.05,.8,.75,.84,.66,.59,.8,.78,.95,.05,.38,.69,.85,.03,.28,.67,.77,.19,.63,0,.16,.01,.1,.29,.02,.58,.38,.07,.27,.6,1,.98,.17,.91,.22,.85,.47,.75,.19,.45,.07,.58,.31,.31,0,.19,.85,.17,.44,.07,.2,.94,.53,.04,.78,0,.73,.14,0,.66,.03,.64,.03,.8,.1,.12,.41,.85,.89,.41,.19,.23,.61,0,.11,.01,.03,.01,.38,.82,.08,0,.74,.49,.12,.07,0,.77,0,0,.39,.45,.34,.7,.66,0,.39,0,.01,.26,.15,.29,0,.01,.19,.86,.28,0,.05,.01,.01,.06,.07,.64,.03,.02,.81,.98,.3,.8,.03,.1,0,.19,.71,0,.27,0,.65,.19,.01,.13,.17,0,0,0,0,.01,.33,.26,.35,0,.29,.19,.01,.12,.43,.36,.59,.04,.94,.33,.74,0,.05,.83,.26,.95,.5,0,.84,.36,.64,0,.35,.59,.56,.04,.09,.85,.55,.8,.02,.39,.03,.74,.16,.93,.37,.35,.47,0,.06,.15,.89,0,.78,.12,.26,.2,0,0,.2,0,0,.3,.16,0,.77,.72,.13,.03,.12,.01,.27,0,.41,.4,0,.6,.12,.01,.02,.01,.72,.21,0,.36,.28,.03,.92,.04,.65,.26,.14,.94,0,.14,.2,.14,.56,.07,.07,0,.3,.01,.38,.61,.88,.03,.63,.09,.84,.01,.1,.41,0,.31,.25,.8,.42,.04,.8,.01,.5,0,.18,0,0,0,.01,.01,.42,.43,.2,.51,.86,.36,.53,.93,.31,.09,.21,.45,.58,.02,0,.03,.26,.93,.78,.38,0,.61,.08,.62,.11,0,.44,.77,.47,.83,.21,.98,.87,.98,.83,.09,0,0,.03,.63,.52,.11,.69,0,.02,.7,.02,.55,.63,.3,.75,.58,.1,.85,.45,0,.01,.13,.3,.4,.16,.58,0,.26,.14,.03,0,.02,.35,.43,.04,.14,.17,.01,.01,0,.01,0,.01,.16,.48,.78,.72,.39,.81,.58,.3,.69,.28,.04,.33,.86,.63,.15,.05,.07,.42,0,.04,.48,.3,.94,.13,.4,.43,.73,.44,.12,.14,.59,.23,.91,.81,.95,0,.85,.18,.8,.51,.01,.27,.35,.67,.89,.63,.64,0,.49,.92,.03,.06,.55,.76,.06,.01,.22,.48,.23,.02,.4,.32,.77,.95,.03,0,.05,0,.02,0,.03,0,.71,.03,.23,.29,.01,.55,.17,0,.71,.07,.9,.26,.28,.78,0,.1,.99,0,.01,.03,.56,0,.17,.6,.52,.24,0,0,.02,.1,0,.72,.34,.47,.01,0,.42,.97,.1,.19,.8,.81,.01,.98,0,0,.39,0,0,.66,.03,.32,.67,0,.1,.11,.36,.05,.23,.43,.13,.03,.15,.21,.92,.21,.15,.02,.28,.17,.41,.76,.01,.62,0,.99,.38,.33,.79,.18,.76,.55,.02,.09,0,0,.35,.51,.23,.77,.54,.87,.96,.15,.12,.24,0,.02,.31,.3,.66,.01,.16,0,.34,.69,.97,.01,.89,.74,.29,.47,.57,.13,.56,.03,0,.53,.8,.48,.6,.32,.01,.62,.71,.09,0,.78,.02,.65,.02,.08,.01,0,.27,.66,.06,.39,.09,0,.01,.03,0,.15,.11,.05,.01,.27,.91,.04,.7,0,.89,.1,.17,.11,.87,.83,.05,.47,0,.44,.06,0,0,.01,.05,.1,.26,.66,.85,.78,1,.53,.85,.1,.78,.83,.26,.27,.7,.61,.21,.79,.5,.85,.04,.13,.3,.05,.87,.87,.22,.04,.71,.59,.91,.11,.01,0,0,0,.2,.15,.29,.47,0,.01,.01,.37,.03,.72,.89,.07,.01,.08,.02,.02,.51,.68,.52,.89,.69,0,.24,.05,.01,.09,.1,0,.11,.89,0,.02,.43,.56,.7,.03,.39,0,.33,.6,.38,0,.71,.26,.62,0,.77,0,.07,.93,.38,.25,0,.52,0,.31,.84,.04,.11,.06,0,.71,.64,.01,.33,.85,0,.28,.14,.81,.17,.61,.21,.05,0,.87,.23,.81,.08,.66,.33,0,.16,.2,.66,.51,.76,0,.02,.29,.14,.68,.79,.64,.01,.25,.13,.09,.11,.21,.38,0,.08,.54,.02,.08,.01,.06,.49,.81,.4,.1,.26,.43,.27,.03,0,.07,.75,.03,.31,.81,.77,.94,0,.92,0,.14,.7,.29,.17,0,.77,.69,.05,.13,.13,0,0,.33,.5,.35,.22,.57,.03,.25,.65,.12,.02,.61,.66,0,.29,0,.03,.97,.73,.24,.42,.58,.05,.78,.06,.05,0,.41,.17,.37,.04,.01,.75,0,.52,.27,.96,.86,.91,.57,.01,.96,.34,.36,.94,.99,.07,.16,.18,.07,.01,0,.99,.3,.12,.02,0,.18,.29,.63,.99,.03,.53,.1,.01,.64,0,.05,.49,.21,.8,.1,.11,.29,.22,.06,.68,.25,.3,.02,.85,.88,.57,.58,.24,.54,0,.64,.4,.12,.67,.21,.99,.35,.42,.05,.09,.31,.05,.52,.5,.03,0,.84,.43,.01,0,.53,.69,.36,.41,.08,0,.02,.01,.12,.01,.27,.39,.62,.55,.71,0,.17,.32,0,.06,0,.22,.01,.2,0,.7,.91,.01,0,.01,.41,.01,.47,0,.56,.03,.73,0,.32,0,.86,.01,.84,.34,.98,.06,.95,.58,0,.07,.9,0,.42,0,.01,.09,.48,0,.01,.96,.81,.18,0,0,0,.13,.01,.41,.03,.82,0,0,.01,.42,.09,.81,.02,0,0,0,.56,.07,.13,0,.06,.01,.02,.7,.11,.8,.21,.03,.4,0,.09,.42,0,.06,.06,.22,.58,.9,.03,.09,.01,.54,.91,.42,.11,.1,.48,0,.91,.77,.09,.22,.1,.1,.33,.03,0,.97,0,0,.11,.65,.16,.87,.32,.79,.22,0,.32,.23,.1,.5,0,.5,.01,0,.38,.94,0,0,.18,.01,.13,.52,.84,.32,.74,0,.08,.01,0,.13,.32,.12,.75,.59,.54,.11,.03,.21,.03,.14,.39,.6,.39,.02,0,0,.07,.21,.05,.07,.68,0,0,.26,.56,.84,.63,.06,0,.61,.01,.02,.45,.08,.41,.71,.68,.02,.1,.96,.1,.05,0,0,0,.66,.01,.14,0,.76,0,0,.33,0,.38,.13,.49,.03,0,.36,.83,.03,.21,.01,0,.63,.95,.12,0,.79,.27,.52,.3,.32,0,.37,.15,.64,.33,.93,.72,0,0,.4,0,.39,.26,0,.33,.24,.1,.06,.52,.05,.93,.15,.92,.05,.65,.03,.04,.92,.57,.1,0,.77,0,0,.58,.47,.62,.32,.46,.38,.11,.18,.29,.01,.92,.76,.6,.52,.34,0,.07,.14,.58,0,.51,.01,.07,0,.26,.01,.72,0,.03,.63,.1,.69,.07,.03,.52,.76,.11,.22,.32,.22,.99,.45,.31,.85,.26,.01,.39,.59,.05,.01,.37,.15,.11,.05,.82,.61,.45,.92,.76,.04,.04,.94,.67,.62,.12,.14,.04,0,.01,.72,.54,0,.17,.76,.19,.19,.01,.33,.09,.22,.58,.13,.47,.3,.64,0,.47,.15,.85,.62,.09,0,.54,.3,.78,.08,.08,0,.84,.62,.04,.48,.32,.03,.61,.8,.17,.45,.5,.45,.84,0,.99,.01,.1,.99,.17,.04,.8,.44,0,.22,.35,.95,.1,.93,.05,.23,0,.01,.95,0,.67,.27,0,0,0,.51,.23,.27,.04,.74,.61,.43,.16,.16,.8,.11,.97,.1,.15,.11,.04,.93,.8,.26,.99,.65,.54,.79,.02,.31,.83,.66,.01,0,.02,.15,.81,.88,.33,.01,0,.04,.47,.23,0,.49,.57,.38,.06,.31,.82,.41,0,.31,.96,.32,.05,.88,.69,.3,.05,.21,.17,.98,.52,.02,.32,0,.85,.01,.9,0,.36,0,.08,.56,.44,.69,.4,.2,.48,.92,0,.01,.01,.99,.94,.29,.2,.54,.68,.31,.55,.93,.02,.7,.44,0,.11,.3,.02,.16,.03,.83,.72,.45,0,.79,.01,.1,.89,.67,.97,.65,.85,.12,.94,.24,.49,.44,.39,.92,.41,.83,.7,.56,.4,.92,.1,.08,.14,.86,0,0,.15,.4,.43,.2,.29,.02,0,.26,0,0,.71,.46,0,.39,.62,.3,.65,.02];export{a as pvalData};
