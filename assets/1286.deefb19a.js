const a=[0,.57,.76,.08,.49,0,.72,.02,.93,.65,.93,0,0,.81,.92,.08,.04,.99,0,0,.63,.93,.53,.8,.94,.72,.84,.31,.95,.9,.92,.79,.68,0,.03,.01,.29,.84,.11,.51,.79,.97,.18,.02,.02,.84,.59,0,.98,.08,.04,0,.12,.52,.21,.52,.73,0,.33,.67,.02,.83,.57,.18,.58,.53,.69,.56,.8,.68,.98,.5,.74,.01,.91,.1,.18,.02,.45,.06,.48,.61,.63,.97,.89,.18,.64,.12,.62,.41,.68,.23,.7,.04,.06,0,.75,0,.61,.03,.9,.9,.62,.48,.52,.01,.57,.04,.69,.59,.02,.33,.08,.01,.61,.84,.55,.09,.76,1,.27,.17,.01,.79,.29,.28,.35,.12,.03,.94,.75,.68,.55,.23,0,0,.34,.02,.33,0,.97,0,.88,.98,0,.2,.46,.07,.98,.51,1,.98,.56,0,.34,.22,.36,0,.23,.99,.61,.82,.07,.25,.75,.11,.2,.13,.49,.58,0,.32,.67,.71,.26,.55,.86,.76,.11,.67,.88,.06,.67,.46,.33,0,0,0,.64,.01,.71,.14,0,.41,.74,.71,.44,.06,0,.4,.48,.72,.91,0,.81,.94,.13,.61,.7,0,.94,.65,.02,.98,0,.67,.79,.89,.17,.76,.39,.44,.69,.81,.02,.94,.49,.12,.02,.2,.94,.81,.57,.52,0,0,.93,.69,.92,.46,.53,.7,.69,.43,.81,.73,.84,.58,.08,.28,.12,.09,.84,.62,.94,.04,0,.5,.31,.91,.36,.38,.95,.91,.66,.49,.92,.97,.85,0,0,0,.76,.44,.28,.13,.81,.01,.13,.92,.52,.17,.56,.06,.42,.2,.07,.4,.08,.96,.98,.06,.57,.75,.64,.27,1,0,.46,.01,.36,.83,.69,.14,0,.1,.12,.69,.96,.59,.92,.06,0,0,.54,.01,.26,.25,.73,.04,.62,.07,.8,.4,.38,.4,.63,.47,.81,.31,.75,.63,.93,.05,.88,.16,.27,.97,.93,.88,.94,.95,.03,.06,.83,.59,.23,.43,.92,.64,.74,0,0,.35,.75,.44,.7,.49,.58,.94,.02,.08,.15,0,.88,.15,0,.78,.11,.59,.51,.59,.83,.06,0,.08,.16,.7,.66,.19,.03,.84,.54,.86,.13,.32,.95,.98,.49,.68,.72,0,.4,.04,.01,.65,.61,.24,.62,.9,.3,.71,.78,.79,.72,.05,.87,.66,.45,.38,.1,.48,.92,.49,.01,.01,.64,.93,.38,0,0,.03,0,0,.76,.95,.73,.03,.2,.62,.08,.14,.55,0,.78,.5,.41,.55,.83,.01,.77,.84,.98,0,.14,.54,.92,.2,0,.01,.28,.98,.37,.67,.47,.96,.17,.65,0,.05,.68,.83,.08,0,.66,.66,.69,.01,.03,.54,.14,.72,0,0,.49,.77,.78,.97,.45,.49,.97,.91,.29,.75,.52,.85,.92,.97,1,.68,.74,0,.12,.73,.23,.92,.3,.03,.69,.76,.96,.56,.6,.74,.77,.53,.03,.94,.55,.23,.58,.37,.91,.05,.27,.73,0,.95,.01,.97,.9,.77,.1,.29,.72,0,.75,0,.93,.54,1,.24,.73,.73,0,0,.28,.08,.56,.13,.13,.08,0,.33,.02,.5,0,.22,.61,.39,.09,.99,.61,.52,.62,0,.49,.37,.41,.71,.36,.32,.38,.52,.18,.04,.43,.06,0,0,.59,.73,.71,.17,.99,.69,.06,.41,.2,.85,0,0,.83,.46,.5,.94,.76,.64,.02,.57,.03,.35,.2,.72,.51,0,.1,.25,0,.54,.69,.89,.87,0,.83,.98,.87,.74,0,.23,.36,.15,0,.04,0,.12,.55,.79,.26,0,.46,.34,.93,.62,.08,0,.87,.8,.89,.4,0,.33,.13,.3,.26,.28,.96,.73,.11,.06,.06,.85,.1,.02,.93,1,.99,.53,0,.4,0,.01,.41,.9,.84,.73,.89,.6,.02,.46,.97,.93,.65,.22,.28,0,.35,.27,.82,.47,.48,.05,.89,.6,.26,.92,.5,.44,.55,.02,.57,.46,.64,.16,0,0,.05,.59,.9,.12,.01,.71,.94,0,0,.43,0,0,.43,.02,.68,.94,.33,.22,.61,.41,.05,.11,0,.85,.73,.99,.11,.73,.47,.54,.61,.71,.39,.45,.18,.94,.24,0,.92,0,.3,.95,0,.5,0,.83,.75,.32,.72,.95,.73,.22,.44,0,.93,.96,.9,.3,.05,0,.78,.95,.4,.3,0,.24,.55,0,1,.01,.18,.19,.04,.86,.94,.85,.94,.83,.88,.56,.88,0,.73,0,.86,.85,.92,0,.53,0,.06,.37,.99,.69,.46,.53,0,.8,.92,.69,.48,0,.92,.46,.81,.31,.84,.98,.5,.44,.42,.73,.35,.5,.04,.04,.1,.77,.03,.05,.77,.01,.34,.2,.42,.57,.73,.56,.25,.41,.04,.85,.54,.91,0,0,.7,0,.01,.86,.22,.17,.41,.07,.52,.81,.09,.99,.62,.87,.57,0,0,.83,.36,.93,0,.41,.14,.76,.22,.06,.37,.06,.96,.1,.17,.04,.24,.12,.1,.13,.67,.31,.45,.96,.04,.52,.29,.6,.54,0,.71,.94,.35,.04,.15,.56,.49,.73,.64,.21,.93,0,.99,.69,.29,.67,.24,.76,.24,.19,.77,.48,.27,0,.04,.23,.38,0,.03,0,.68,.3,.96,.35,.44,.74,0,.99,0,.69,0,.81,0,.4,.09,.5,.82,.46,0,.3,.66,.12,.2,.04,.96,.72,.93,.66,0,1,.82,.8,.16,.49,.24,.97,.41,.81,.32,.87,.01,.97,0,.11,.31,.11,.43,.82,.78,.25,.24,.92,.58,.25,.04,.15,.53,.93,.97,.91,.89,.71,.87,.12,.93,.96,.92,.96,.62,.55,.14,.96,.02,.01,.86,.62,.68,.19,.23,.69,.93,.86,.71,.62,.83,.87,.83,.03,.78,0,0,.03,.08,.34,.86,.32,.17,.69,.85,.05,.78,.03,.37,.45,.55,.01,.01,.16,0,.01,.47,0,.51,.01,.97,.32,.24,.36,.86,0,.3,.35,.97,.09,.08,.71,.32,0,.98,.28,0,.57,.28,.06,.42,.29,.02,.5,.72,.42,.9,.88,.65,.96,0,.84,.34,.44,.06,.18,.32,.84,.94,.7,.91,.12,.01,.26,.62,.04,.94,.6,.17,0,.02,.6,.37,.59,.07,.58,.25,.3,.49,0,0,.83,.84,.63,.55,.95,0,.88,0,.8,.21,.78,0,.93,.82,.04,.66,.77,.24,.68,.75,.83,.92,.54,.64,.05,.92,.68,.03,.2,0,.24,.98,.04,.27,.02,.98,.13,0,.74,.53,.02,.42,0,.82,.93,.13,.42,.39,.63,0,0,.3,0,.99,.41,.31,.57,.38,.99,.6,.07,0,.73,.69,.59,0,.62,.57,0,.06,.27,.66,0,.26,.95,.99,.48,0,.08,0,.42,.02,.16,0,.45,0,0,.99,.27,0,.61,.11,.54,.97,.63,.47,.29,.07,0,.09,.27,.85,.13,.63,.06,.75,.17,.52,.92,0,.4,.65,0,.47,.75,.94,.9,.69,.8,.92,.02,.88,0,.43,.72,.91,.85,.01,.01,0,.74,.32,.88,.64,.72,.66,.75,.91,0,0,.3,.92,.48,0,.61,.68,.44,.05,.87,.82,0,0,.03,.02,.45,.2,.21,.9,.13,.28,.77,.59,.75,.13,.08,0,0,.95,1,.82,.03,0,.38,0,.72,.71,0,.41,.55,0,.05,0,0,.73,.06,.41,.65,0,.92,0,.81,0,.03,.69,.79,.42,0,.2,.78,.92,.96,.1,.45,.32,0,.1,.39,.98,0,.96,.49,.45,0,.74,.56,.02,0,.02,.12,.85,.01,.65,.12,.17,.8,.38,.46,.67,.09,0,.42,.51,.34,0,.92,.99,.84,.48,.98,.26,.35,.06,.99,.14,.62,.95,0,.46,.24,0,.77,.79,0,.5,.86,.65,.27,.14,.75,.98,.74,.36,.17,.35,.01,.17,.35,.83,0,.03,.33,.23,.16,.26,.65,0,.87,.21,.65,.59,.31,0,.7,.63,.97,.72,.84,.43,.53,0,.66,.53,.74,.42,.19,.81,.74,.07,.78,.11,.69,0,.55,.57,.9,.16,.48,.51,.78,.5,.71,.26,.31,0,.3,.24,.82,0,.75,.05,.73,.58,.2,.62,0,.83,.68,.86,.28,.11,.89,.69,.51,0,.79,.21,0,.88,.96,0,.28,.02,.93,.15,.14,.02,.57,.95,0,.01,.21,.98,.39,.42,.72,.85,.53,.01,.17,.39,.89,.99,.92,0,0,.09,0,.56,.8,.46,.99,0,.95,.13,.64,.73,.81,0,.87,.41,.97,.72,.73,.95,.01,.42,.01,.19,.22,.01,0,.12,.81,.39,.03,.64,.79,.63,.02,.76,.74,.96,.17,.97,.71,.76,.02,.22,.26,.01,.1,.83,.31,.64,.49,.29,.15,.77,.95,.86,.11,.07,.48,.05,.04,.7,.48,.94,.73,.29,.49,.33,.26,.83,.2,.02,.01,.56,.5,.06,.21,0,.01,.79,.75,.39,.17,.94,.88,.11,.11,.51,.64,.47,0,.05,.05,.34,.37,.22,.02,.95,.98,.81,.85,.79,1,.56,.96,.38,.79,.86,.29,.04,0,1,.57,.08,.27,.37,.37,0,1,.14,.71,.4,.1,.14,.2,.12,.15,.88,.52,.17,.35,.92,.35,.78,.26,.56,.51,0,.5,.16,.41,.48,.71,.77,.75,.6,.71,.19,.95,.39,.68,.69,.76,.84,.51,.28,.2,.32,.76,.65,.23,.38,.72,.55,.68,.39,.24,.32,.71,.49,.41,.95,.86,.14,.61,.01,.72,.57,.5,.17,.27,.26,.41,0,.57,.14,.04,.18,.14,0,.03,.31,.7,.8,.94,.28,.03,.13,.01,.13,.43,.77,.23,.77,.79,.96,0,.53,.46,.7,.37,.84,.98,.08,.92,.02,.22,.63,.02,.55,.17,.66,.36,.16,.93,.96,.96,.67,.25,.9,.21,.48,.43,.28,.86,.87,.77,.16,0,.85,0,.74,.81,.27,.9,.46,.31,.49,.99,.24,.28,.21,.47,.01,.48,.5,.6,.95,.56,.84,.93,.26,.48,.97,.78,.95,.78,.98,.07,.19,.19,.73,.19,.76,.84,.29,.14,.03,.98,.92,.69,.59,.56,.51,.07,.99,.9,.67,.61,.87,0,0,.53,.99,.51,.23,.78,.43,.78,.91,.67,.06,.4,0,.08,.73,0,.67,.71,.89,.26,.37,.76,.42,.61,.19,.62,.97,.75,1,.58,.94,.36,.71,.95,.03,.79,.14,.38,.85,.02,.74,.18,.01,.8,.69,0,.36,.79,.82,.27,.18,.85,.6,.7,.89,.45,.68,.87,.77,.23,.68,0,.87,.72,.66,.28,.41,.9,0,.43,.96,.81,.29,.53,.16,.49,.97,.97,.38,.01,.87,.44,.72,.75,.6,.67,.75,.13,.69,.37,.54,.68,.51,.77,0,.83,.72,.96,.46,.04,.95,.35,.42,.05,.49,.58,.76,0,0,.64,.21,.95,.38,.54,0,.47,.4,.8,.08,.55,.49,.08,.45,.91,.33,.72,.11,.23,.99,.47,.46,0,.48,.96,0,.7,.84,.09,.2,.21,.83,.61,.64,.18,.58,.05,.48,.85,.77,.08,.28,.2,0,.24,0,0,.98,.64,.71,.21,.93,.56,.6,.64,.38,0,.41,.05,.83,.46,0,.04,.7,.19,.19,.11,.63,.91,.05,.63,.13,.32,.81,.05,.1,.68,.43,.83,0,.83,0,.13,.3,.87,0,.87,.17,0,.88,.91,0,.51,.39,.53,.01,.4,.01,.13,0,.01,.94,.45,.37,.96,.98,.01,.51,.39,.69,.49,.83,0,.54,.75,.58,.01,0,0,.04,0,.76,.51,.57,.87,.62,.34,.26,.37,.16,0,0,.8,0,.25,.09,.96,.76,.23,.8,.33,.03,.01,.74,.22,.11,.02,.78,.6,.94,.01,.18,.43,.64,.63,0,.87,.69,.98,.31,.03,.74,0,.89,.67,.93,0,.61,.04,.98,.23,.84,.63,.89,.84,.51,.53,.97,.34,0,.68,.13,.51,.27,.86,.88,.94,.85,.39,.82,.37,.35,.19,.85,.68,0,.72,.74,.03,.57,.53,.3,.87,.75,.83,.22,.44,.85,.13,.88,.07,.76,.35,.76,.04,.03,.01,0,.04,.85,.48,.9,0,.01,.8];export{a as pvalData};
